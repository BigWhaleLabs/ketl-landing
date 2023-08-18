import { JSX } from 'preact/jsx-runtime'

export default interface TokenInstruction {
  title?: string
  subtitle?: () => JSX.Element
  body?: (token: string) => JSX.Element
}
