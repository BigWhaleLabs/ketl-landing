import KetlPath from 'models/KetlPath'

export default function ({
  blank,
  params,
  path,
}: {
  blank?: boolean
  path: KetlPath
  params: Record<string, string>
}) {
  const link = `ketl://${path}`
  const query = new URLSearchParams(params)
  if (blank) return window.open(`${link}?${query}`, '_blank')
  return window.location.assign(`${link}?${query}`)
}
