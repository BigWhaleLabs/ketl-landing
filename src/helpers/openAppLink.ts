import EmailScreenParams from 'models/EmailScreenParams'
import KetlPath from 'models/KetlPath'

export default function ({
  blank,
  domain,
  path,
  token,
}: EmailScreenParams & {
  blank?: boolean
  path: KetlPath
}) {
  const link = `ketl://${path}`
  const query = `?domain=${domain}&token=${token}`
  if (blank) return window.open(`${link}${query}`, '_blank')
  return window.location.assign(`${link}${query}`)
}
