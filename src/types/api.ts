export type LogoProps = {
  alternativeText: string
  url: string
}

export type ImageDataProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageDataProps
}

export type LangingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
