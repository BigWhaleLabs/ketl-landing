import { BodyText } from 'components/Text'
import EmailScreenParams from 'models/EmailScreenParams'
import classnames, {
  alignItems,
  display,
  flex,
  justifyContent,
} from 'classnames/tailwind'
import isMobileDevice from 'helpers/isMobileDevice'
import openAppEmailLink from 'helpers/openAppEmailLink'

const wrapper = classnames(
  display('flex'),
  flex('flex-1'),
  justifyContent('justify-center'),
  alignItems('items-center')
)

export default function EmailScreen({ domain, token }: EmailScreenParams) {
  if (domain && token && isMobileDevice) openAppEmailLink({ domain, token })

  return (
    <div className={wrapper}>
      <BodyText>💌</BodyText>
    </div>
  )
}
