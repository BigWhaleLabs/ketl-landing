import { CaptionText } from 'components/Text'
import { isMobileDevice } from 'helpers/isMobileDevice'
import Arrow from 'icons/Arrow'
import InstructionSection from 'components/InstructionSection'
import KetlPath from 'models/KetlPath'
import TokenScreenParams from 'models/TokenScreenParams'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
  padding,
  zIndex,
} from 'classnames/tailwind'
import openAppLink from 'helpers/openAppLink'

const wrapper = classnames(
  display('flex'),
  flex('flex-1'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-6'),
  padding('px-4'),
  zIndex('z-20')
)

export default function TokenScreen({ token }: TokenScreenParams) {
  if (isMobileDevice) openAppLink({ params: { token }, path: KetlPath.token })

  return (
    <div className={wrapper}>
      <CaptionText>
        If kelt doesn’t open automatically, follow the instructions below.
      </CaptionText>

      <Arrow />

      <InstructionSection token={token} />
    </div>
  )
}
