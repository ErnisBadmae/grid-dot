export interface GridRow {
  label: string
  content: string[]
}

export interface CaseStudy {
  title: string
  subtitle: string
  tags: string[]
  clientContextP1: string
  clientContextP2: string
  grid: GridRow[]
  closingP1: string
  closingP2?: string
}
