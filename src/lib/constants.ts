// Контент сайта (извлечен из CraftCMS)
import { basePath } from '@/lib/basePath'

export const SITE_CONFIG = {
  title: 'Grid & Dot - Extended Expertise',
  description: 'Professional web development and design services',
  url: 'https://gridanddot.com',
  email: '[email protected]',
}

export const SECTION_1 = {
  heroTitle: 'we are a recruiting agency',
  ourGoalsHeader: 'What are our goals?',
  ourGoalsParagraph: 'Find talent, match personalities and respond precisely to companies\' needs.',
}

export const SECTION_2 = {
  header: '<strong>Helping you achieve your</strong> <em class="color-blue">goals</em>',
  paragraph: 'With a presence in UK and abroad, we make your recruitment success a priority.',
}

export const SECTION_3 = {
  items: [
    {
      number: '01',
      description: 'Talent Acquisition - Finding the right people for your team',
    },
    {
      number: '02',
      description: 'HR Consulting - Strategic advice for your HR needs',
    },
    {
      number: '03',
      description: 'Career Coaching - Helping candidates reach their potential',
    },
  ],
}

export const SECTION_4 = {
  slogan: `<h1 class="mob-text-right">
<span class="offset-line-1 position-relative display-inline-block"><strong>assemble</strong></span>
<span class="offset-line-2 text-nowrap position-relative display-inline-block">
    <em class="display-inline-block">your</em>
    <strong>team</strong>
</span>
<strong class="offset-line-3 position-relative display-inline-block">with us</strong>
</h1>`,
  subheader: 'Expand globally with top-tier compliance at every stage.',
  button: 'I need to hire',
}

export const SECTION_5 = {
  header: 'Our Partners',
  partners: [
    { name: 'Partner 1', logo: `${basePath}/images/partners/partner1.png` },
  ],
}

export const SECTION_6 = {
  paragraph: 'Have a project in mind?',
  slogan: '<h1><strong>Let\'s work</strong> <em class="color-blue">together</em></h1>',
  subhead: 'Contact us today',
  button: 'Send Message',
}

export const SECTION_7 = {
  subheader: 'Get in touch',
  paragraph: '<p>We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.</p>',
  header: 'Contact Us',
  submitUrl: '/api/contact',
}

export const FOOTER = {
  basedIn: 'Based in San Francisco, CA',
}

export const CONTACTS = {
  email: '[email protected]',
  phone: '+1 (555) 123-4567',
  telegram: '@gridanddot',
  whatsapp: '+15551234567',
}
