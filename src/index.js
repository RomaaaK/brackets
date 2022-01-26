module.exports = function check(str, bracketsConfig) {
  const openBrackets = [].concat(...bracketsConfig).filter((_, i) => !(i % 2));
  const closeBrackets = [].concat(...bracketsConfig).filter((_, i) => i % 2);
  const stack = []

  for (let i = 0; i < str.length; i++) {

    if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop()
        continue
      }
      stack.push(str[i])
      continue
    }

    if (openBrackets.includes(str[i])) {
      stack.push(str[i])
      continue
    }

    if (str[i] === closeBrackets[openBrackets.indexOf(stack[stack.length - 1])]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length ? false : true
}

