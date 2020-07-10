import CryptoJS from 'crypto-js'

var key = 'aPasswordfa'
var iv = '12345678abcdefgh'
export function getPassword (commonwords = '', attribute = '', maxSize = 12) {
  const commonArr = commonwords.split('')
  const attributeArr = attribute.split('')
  let arr = []
  if (commonArr.length > attributeArr.length) {
    arr = mergeTwoArr(attributeArr, commonArr)
  } else {
    arr = mergeTwoArr(commonArr, attributeArr)
  }
  const fullPassword = encrypt(arr.join(''))
  return `${fullPassword}`.slice(fullPassword.length - maxSize, maxSize)
}

function mergeTwoArr (smallArray = [], bigArray = []) {
  const arr = []
  for (let i = 0; i < bigArray.length; i++) {
    const a = bigArray.pop()
    const b = smallArray.pop()
    if (i % 2 === 1) {
      a && arr.push(a)
      b && arr.push(b)
    } else {
      a && arr.unshift(a)
      b && arr.unshift(b)
    }
  }
  return arr
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
