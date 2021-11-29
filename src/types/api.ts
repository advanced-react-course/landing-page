export type LogoPropsProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  alternativeText?: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type IconProps = {
  name: string
}

export type TechIconProps = {
  title: string
  icon: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: Array<TechIconProps>
}

export type ConceptProps = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<ConceptProps>
}

export type ModuleProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Array<ModuleProps>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type PhotoProps = {
  alternativeText: string
  url: string
}

export type SocialLinkProps = {
  title: string
  url: string
}

export type AuthorProps = {
  name: string
  role: string
  description: string
  photo: PhotoProps
  socialLinks: Array<SocialLinkProps>
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<AuthorProps>
}

export type ReviewProps = {
  id?: number
  name: string
  text: string
  photo: PhotoProps
}

export type SectionReviewsProps = {
  title: string
  reviews: Array<ReviewProps>
}

export type QuestionProps = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Array<QuestionProps>
}

export type LandingPageProps = {
  logo: LogoPropsProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
