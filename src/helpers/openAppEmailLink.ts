export default function ({
  blank,
  domain,
  token,
}: {
  domain: string
  token: string
  blank?: boolean
}) {
  window.open(
    `ketl://email?domain=${domain}&token=${token}`,
    blank ? '_blank' : undefined
  )
}
