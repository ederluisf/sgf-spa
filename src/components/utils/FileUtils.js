export default {
  getByteArrayFrom (fileUploaded) {
    return new Promise(function (resolve, reject) {
      let fileByteArray = []
      let fileReader = new FileReader()

      fileReader.readAsArrayBuffer(fileUploaded)

      fileReader.addEventListener('load', () => {
        let array = new Uint8Array(fileReader.result)

        for (var i = 0; i < array.length; i++) {
          fileByteArray.push(array[i])
        }
        resolve(fileByteArray)
      })
    })
  }
}
