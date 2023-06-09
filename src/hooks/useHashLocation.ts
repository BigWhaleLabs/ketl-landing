import { navigate, useLocationProperty } from 'wouter-preact/use-location'

export default function () {
  const hashLocation = () => window.location.hash.replace(/^#/, '') || '/'

  const hashNavigate = (to: string) => navigate('#' + to)

  const location = useLocationProperty(hashLocation)
  // Should be explicit tuple type
  return [location, hashNavigate] as [string, (to: string) => void]
}
