/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const freqArr = {}
  for(const char of str1) freqArr[char.toLowerCase()] = (freqArr[char.toLowerCase()] || 0) + 1;
  for(const char of str2) freqArr[char.toLowerCase()] = (freqArr[char.toLowerCase()] || 0) - 1;
  console.log(freqArr)
  for(char in freqArr) {
    if(freqArr[char]) return false
  }
  return true
}

module.exports = isAnagram;
