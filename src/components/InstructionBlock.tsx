import { CaptionText, InstructionText } from 'components/Text'
import TokenInstruction from 'models/Instruction'
import TokenScreenParams from 'models/TokenScreenParams'
import classnames, {
  backgroundColor,
  borderRadius,
  gap,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import columnCentered from 'helpers/columnCenteredStyle'

const wrapper = classnames(
  ...[columnCentered],
  maxWidth('max-w-instruction-card'),
  borderRadius('rounded'),
  backgroundColor('bg-semi-blue-default'),
  padding('p-4'),
  gap('gap-y-4')
)
const topBlock = classnames(...[columnCentered], gap('gap-y-1'))

export default function ({
  body,
  index,
  subtitle,
  title,
  token,
}: { index: number } & TokenInstruction & TokenScreenParams) {
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
