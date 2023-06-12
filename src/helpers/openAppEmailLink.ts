export default function ({
  blank,
  domain,
  token,
}: {
  domain: string
  token: string
  blank?: boolean
}) {
  if (blank)
    return window.open(`ketl://email?domain=${domain}&token=${token}`, '_blank')
  return window.location.assign(`ketl://email?domain=${domain}&token=${token}`)
}
