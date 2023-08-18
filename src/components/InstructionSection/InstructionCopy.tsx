import { InstructionText } from 'components/Text'
import { toast } from 'react-toastify'
import { useCallback } from 'preact/hooks'
import Button from 'components/Button'
import TokenScreenParams from 'models/TokenScreenParams'

export function InstructionCopyButton({ token }: TokenScreenParams) {
  const onCopy = useCallback(async () => {
    if (!token) return
    try {
      await navigator.clipboard.writeText(token)
      toast('Token copied 🎉')
    } catch (e) {
      toast('Failed to copy to clipboard', { type: 'error' })
    }
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
      (You can always come back to this page to copy it again)
    </InstructionText>
  )
}
