export default function () {
  const [hash, token] = window.location.hash
    .substring(2)
    .replace('%23', '#')
    .split('?token=')

  const [path, anchor] = hash.split('#')

  return {
    anchor,
    path,
    token,
  }
}
