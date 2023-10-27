import { isMobileDevice } from 'helpers/isMobileDevice'
import KetlPath from 'models/KetlPath'

export default function ({
  blank,
  params,
  path,
}: {
  blank?: boolean
  path: KetlPath
  params?: Record<string, string>
}) {
  if (!isMobileDevice) return

  const link = `ketl://${path}`
  const linkToOpen = params ? `${link}?${new URLSearchParams(params)}` : link
  console.log(linkToOpen)
  if (blank) return window.open(linkToOpen, '_blank')
  return window.location.assign(linkToOpen)
}
