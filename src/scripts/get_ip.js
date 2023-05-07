export const getIp = async () => {
  let ip

  await fetch('https://jsonip.com', { mode: 'cors' })
    .then(response => response.json())
    .then(data => ip = data)

  return ip
}
