enum AttestationType {
  KetlTeam = 0,
  YC = 1,
  Founder = 2,
  VC = 3,
  TopYC = 4,
  TopVC = 5,
}

export type AttestationTypeWithNull = AttestationType | null
export type AttestationTypeWithNullProp = {
  attestationType: AttestationTypeWithNull
}

export default AttestationType
