import { NextResponse } from 'next/server'

const RESEND_API_URL = 'https://api.resend.com/emails'

interface ContactSubmission {
  name: string
  email: string
  message: string
  projectType: string
  submittedAt: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function normalizeSubmission(body: Record<string, unknown>): ContactSubmission {
  return {
    name: String(body.name ?? '').trim(),
    email: String(body.email ?? '').trim(),
    message: String(body.message ?? '').trim(),
    projectType: String(body.projectType ?? '').trim(),
    submittedAt: new Date().toISOString(),
  }
}

async function sendViaResend(submission: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || process.env.RESEND_CONTACT_TO
  const from = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL

  if (!apiKey || !to || !from) {
    return {
      configured: false as const,
      missing: {
        RESEND_API_KEY: !apiKey,
        CONTACT_TO_EMAIL: !to,
        CONTACT_FROM_EMAIL: !from,
      },
    }
  }

  const subjectParts = ['New website contact']
  if (submission.projectType) subjectParts.push(`(${submission.projectType})`)
  subjectParts.push(`from ${submission.name}`)

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: submission.email,
      subject: subjectParts.join(' '),
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Project type: ${submission.projectType || 'Not specified'}`,
        `Submitted at: ${submission.submittedAt}`,
        '',
        'Message:',
        submission.message || 'No additional context provided.',
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(submission.projectType || 'Not specified')}</p>
        <p><strong>Submitted At:</strong> ${escapeHtml(submission.submittedAt)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(submission.message || 'No additional context provided.').replaceAll('\n', '<br />')}</p>
      `,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Resend error ${response.status}: ${errorText}`)
  }

  return { configured: true as const }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const submission = normalizeSubmission(body)

    if (!submission.name || !submission.email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(submission.email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    const delivery = await sendViaResend(submission)

    if (!delivery.configured) {
      console.warn('Contact form delivery is not configured.', {
        missing: delivery.missing,
        submission,
      })

      return NextResponse.json(
        {
          error: 'Email delivery is not configured on this deployment.',
          fallbackTo: 'mailto',
        },
        { status: 503 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message received. We will contact you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Failed to send message.',
        fallbackTo: 'mailto',
      },
      { status: 500 }
    )
  }
}
