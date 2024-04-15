function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  let start = 0;
  let end = lowercaseWord.length - 1;

  while (start < end) {
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
