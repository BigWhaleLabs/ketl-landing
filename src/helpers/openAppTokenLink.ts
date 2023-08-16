export default function ({ blank, token }: { token: string; blank?: boolean }) {
  if (blank) return window.open(`ketl://token?token=${token}`, '_blank')
  return window.location.assign(`ketl://token?token=${token}`)
}
