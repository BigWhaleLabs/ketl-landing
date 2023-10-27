enum VerificationType {
  email = '0',
  twitter = '1',
  balance = '2',
  token = '3',
}

export type AvailableVerificationTypes = keyof typeof VerificationType

export default VerificationType
