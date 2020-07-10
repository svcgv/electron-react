import CryptoJS from 'crypto-js'

var key = 'aPasswordfa'
var iv = '12345678abcdefgh'
export function getPassword (commonwords, attribute) {
  return encrypt(attribute + commonwords)
}

function encrypt (text) {
  return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
}

function decrypt (text) {
  var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return result.toString(CryptoJS.enc.Utf8)
}

var text = 'ni你好hao'
var encoded = encrypt(text)
console.log(encoded.toString())
console.log(decrypt(encoded))
