import { JSX } from 'preact/jsx-runtime'

export default interface Instruction {
  title?: string
  subtitle?: () => JSX.Element
  body?: (token: string) => JSX.Element
}
