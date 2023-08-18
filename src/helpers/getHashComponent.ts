export default function () {
  const [hash, token] = window.location.hash
    .substring(2)
    .replace('%23', '#')
    .split('?token=')

  const [path, anchor] = hash.split('#')

  console.log('token', token)
  console.log('path', path)
  console.log('anchor', anchor)

  return {
    anchor,
    path,
    token,
  }
}
