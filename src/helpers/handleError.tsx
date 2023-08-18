import { toast } from 'react-toastify'

export default function ({
  e,
  toastMessage,
}: {
  e: unknown
  toastMessage?: string
}) {
  console.error(e)
  if (toastMessage) toast(toastMessage, { type: 'error' })
}
