import InstructionBlock from 'components/InstructionBlock'
import TokenScreenParams from 'models/TokenScreenParams'
import classnames, { display, flexDirection, gap } from 'classnames/tailwind'
import instructions from 'data/instructions'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-y-2')
)

export default function ({ token }: TokenScreenParams) {
  return (
    <div className={wrapper}>
      {instructions.map((instruction, index) => (
        <InstructionBlock index={index} token={token} {...instruction} />
      ))}
    </div>
  )
}
