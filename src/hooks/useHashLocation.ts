// import { navigate, useLocationProperty } from 'wouter-preact/use-location'

// export default function () {
//   const hashLocation = () => window.location.hash.replace(/^#/, '') || '/'

//   const hashNavigate = (to: string) => navigate('#' + to)

//   const location = useLocationProperty(hashLocation)
//   // Should be explicit tuple type
//   return [location, hashNavigate] as [string, (to: string) => void]
// }
import { BaseLocationHook } from 'wouter-preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import getHashComponent from 'helpers/getHashComponent'

const currentLocation = () =>
  getHashComponent().path ? `/${getHashComponent().path}` : '/'

const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation())

  useEffect(() => {
    const handler = () => setLocation(currentLocation())

    window.addEventListener('hashchange', handler)
    window.addEventListener('popstate', handler)
    window.addEventListener('pushState', handler)
    return () => {
      window.removeEventListener('hashchange', handler)
      window.removeEventListener('popstate', handler)
      window.removeEventListener('pushState', handler)
    }
  }, [])

  const navigate = useCallback((to: string) => (window.location.hash = to), [])
  return [location, navigate]
}

export default useHashLocation as BaseLocationHook
