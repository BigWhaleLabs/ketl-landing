import {
  InstructionCopyButton,
  InstructionCopyCaption,
} from 'components/InstructionSection/InstructionCopy'
import InstructionDownloadButtons from 'components/InstructionSection/InstructionDownload'
import InstructionLastStep from 'components/InstructionSection/InstructionLastStep'
import TokenInstruction from 'models/Instruction'

const instructions: TokenInstruction[] = [
  {
    body: (token: string) => <InstructionCopyButton token={token} />,
    subtitle: () => <InstructionCopyCaption />,
    title: 'Copy your anonymous token',
  },
  {
    body: () => <InstructionDownloadButtons />,
    title: 'Download ketl',
  },
  {
    subtitle: () => <InstructionLastStep />,
  },
]

export default instructions
