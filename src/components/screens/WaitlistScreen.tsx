import KetlPath from 'models/KetlPath'
import MainScreen from 'components/screens/MainScreen'
import WaitlistScreenParams from 'models/WaitlistScreenParams'
import openAppLink from 'helpers/openAppLink'

export default function ({
  attestationType,
  context,
  inviteCode = '',
  passed,
  value,
  verificationType,
}: WaitlistScreenParams) {
  openAppLink({
    params: {
      attestationType,
      context,
      inviteCode,
      passed,
      value,
      verificationType,
    },
    path: KetlPath.waitlist,
  })

  return <MainScreen />
}
