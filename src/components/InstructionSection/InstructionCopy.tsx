import { InstructionText } from 'components/Text'
import { useCallback } from 'preact/hooks'
import Button from 'components/Button'
import TokenScreenParams from 'models/TokenScreenParams'
import copy from 'copy-to-clipboard'

export function InstructionCopyButton({ token }: TokenScreenParams) {
  const onCopy = useCallback(() => {
    if (token) copy(token)
  }, [token])

  return (
    <Button
      outline
      smallPaddings
      color="text-blue-light"
      title="Copy to clipboard"
      onClick={onCopy}
    />
  )
}

export function InstructionCopyCaption() {
  return (
    <InstructionText primary small>
      (You can always come back to this page to copy it again).
    </InstructionText>
  )
}
