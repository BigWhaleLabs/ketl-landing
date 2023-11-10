export default interface WaitlistScreenParams {
  attestationType: string // AttestationType
  value: string // string || 'null'
  context: string // 1 || 0
  verificationType: string // VerificationType
  passed: string // 1 || 0
  inviteCode?: string
}
