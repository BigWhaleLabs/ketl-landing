import { CaptionText, InstructionText } from 'components/Text'
import Instruction from 'models/Instruction'
import TokenScreenParams from 'models/TokenScreenParams'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  gap,
  justifyContent,
  maxWidth,
  padding,
} from 'classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  maxWidth('max-w-instruction-card'),
  borderRadius('rounded'),
  backgroundColor('bg-semi-blue-default'),
  padding('p-4'),
  gap('gap-y-4')
)
const topBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  gap('gap-y-1')
)

export default function ({
  body,
  index,
  subtitle,
  title,
  token,
}: { index: number } & Instruction & TokenScreenParams) {
  return (
    <div className={wrapper}>
      <div className={topBlock}>
        <CaptionText color="text-secondary">{index + 1}.</CaptionText>
        {title && <InstructionText weight="bold">{title}</InstructionText>}
        {subtitle?.()}
      </div>
      {body?.(token)}
    </div>
  )
}
