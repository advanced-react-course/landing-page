export const getAbsolutePath = (url: string) => {
  return `${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`
}
