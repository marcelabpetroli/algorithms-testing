function isUnique(str) {
  let charMap = new Map()

  if (str.length <= 1) return str

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (charMap.has(char)) {
      return false
    }

    charMap.set(char)
  }
  return true
}

function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false

  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')
  console.log(sortedStr1, sortedStr2)

  return sortedStr1 === sortedStr2
}

module.exports = {
  isUnique,
  isPermutation
}
