export default interface WaitlistScreenParams {
  anonCode: string // string || 'null'
  context: string // 1 || 0
  verificationType: string // VerificationType
}

export interface WaitlistPassedScreenParams {
  id: string // string || 'null'
  inviteCode?: string // string || 'null'
}
