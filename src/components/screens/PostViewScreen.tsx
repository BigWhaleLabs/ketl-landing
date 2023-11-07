import { CaptionText } from 'components/Text'
import { isMobileDevice } from 'helpers/isMobileDevice'
import { useCallback } from 'preact/hooks'
import { useLocation } from 'wouter-preact'
import AnonFace from 'icons/AnonFace'
import Button from 'components/Button'
import KetlPath from 'models/KetlPath'
import PostViewScreenParams from 'models/PostViewScreenParams'
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
import columnCentered from 'helpers/columnCenteredStyle'
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
const caption = classnames(columnCentered, gap('gap-y-8'))

function OpenKetlBlock({ feedId, postId }: PostViewScreenParams) {
  const [, navigate] = useLocation()
  const onClick = useCallback(() => {
    if (!feedId || !postId) return
    isMobileDevice
      ? openAppLink({
          blank: true,
          params: { feedId, postId },
          path: KetlPath.email,
        })
      : navigate('/')
  }, [feedId, postId, navigate])

  if (!feedId || !postId) return null
  const buttonText = `${isMobileDevice ? 'Open' : 'Get'} ketl`
  const captionText = isMobileDevice
    ? 'If Ketl doesn’t open automatically, click the button below.'
    : 'Ketl is available only on mobile devices. Get it by button below.'

  return (
    <div className={caption}>
      <CaptionText>{captionText}</CaptionText>
      <Button title={buttonText} onClick={onClick} />
    </div>
  )
}

export default function PostViewScreen({
  feedId,
  postId,
}: PostViewScreenParams) {
  if (feedId && postId)
    openAppLink({ params: { feedId, postId }, path: KetlPath.post })

  return (
    <div className={wrapper}>
      <AnonFace />
      <OpenKetlBlock feedId={feedId} postId={postId} />
    </div>
  )
}
