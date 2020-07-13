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
  const prePass = arr.join('')
  const pass = prePass.slice(0, maxSize)
  const fullPassword = encrypt(pass)
  return `${fullPassword}`.slice(fullPassword.length - maxSize, maxSize)
}

function mergeTwoArr (smallArray = [], bigArray = []) {
  const arr = []
  const length = bigArray.length
  for (let i = 0; i < length; i++) {
    const a = bigArray.pop()
    const b = smallArray.pop()
    if (i % 2 === 0) {
      a && arr.push(a)
      b && arr.push(b)
    } else {
      a && arr.unshift(a)
      b && arr.unshift(b)
    }
  }
  const lengthStr = arr.length.toString(16)
  arr.unshift(lengthStr)
  return arr
}

export function encrypt (text) {
  return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
}

export function decrypt (text) {
  var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return result.toString(CryptoJS.enc.Utf8)
}
