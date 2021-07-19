export default function loaderImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload(e => {
      resolve(e)
    })
    img.onerror(e => {
      reject(e)
    })
  })
}