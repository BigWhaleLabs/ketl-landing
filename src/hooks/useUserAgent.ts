import { useEffect, useState } from 'react'

type UserAgentPlatform = 'web' | 'android' | 'ios'

export default function useUserAgent(): UserAgentPlatform {
  const [device, setDevice] = useState<UserAgentPlatform>('web')

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    if (/android/i.test(userAgent)) setDevice('android')
    if (/iPad|iPhone|iPod/.test(userAgent)) setDevice('ios')
  }, [])

  return device
}
