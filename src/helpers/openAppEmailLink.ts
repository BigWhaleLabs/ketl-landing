export default function ({ domain, token }: { domain: string; token: string }) {
  window.open(`ketl://email?domain=${domain}&token=${token}`)
}
