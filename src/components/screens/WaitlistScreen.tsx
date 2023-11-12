import KetlPath from 'models/KetlPath'
import MainScreen from 'components/screens/MainScreen'
import WaitlistScreenParams, {
  WaitlistPassedScreenParams,
} from 'models/WaitlistScreenParams'
import openAppLink from 'helpers/openAppLink'

type WaitlistParams = WaitlistScreenParams | WaitlistPassedScreenParams

export default function (params: WaitlistParams) {
  const passed = !('anonCode' in params)

  openAppLink({
    params: { ...params },
    path: passed ? KetlPath.waitlistPassed : KetlPath.waitlist,
  })

  return <MainScreen />
}
