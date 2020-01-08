export const formatDate = (date: string) => {
  const OPTIONS = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('en-US', OPTIONS)
}
