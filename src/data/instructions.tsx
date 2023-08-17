import {
  InstructionCopyButton,
  InstructionCopyCaption,
} from 'components/InstructionSection/InstructionCopy'
import Instruction from 'models/Instruction'
import InstructionDownloadButtons from 'components/InstructionSection/InstructionDownload'
import InstructionLastStep from 'components/InstructionSection/InstructionLastStep'

const instructions: Instruction[] = [
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
