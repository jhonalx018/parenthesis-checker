
const close = ')'
const open = '('

const parenthesisChecker = (entry) => {
  const cleaned = [...entry].filter(letter => [open, close].includes(letter))
  const response = findAndSubstracInternal(cleaned)

  console.log((response && 'Format Error') || 'Format Ok')
}

const findAndSubstracInternal = (elements) => {
  const indexClose = elements.indexOf(close)
  const partial = elements.slice(0, indexClose)
  let idnexOpen;

  innerLabel:
  for (let reverseIndex = partial.length - 1; reverseIndex >= 0; reverseIndex-- ) {
    if (partial[reverseIndex] === open) {
      idnexOpen = reverseIndex

      break innerLabel;
    }
  }

  //using explicit validation because with can get a index in 0
  if(idnexOpen === undefined) {
    return false
  }

  const result = elements.filter((_, index) => ![indexClose, idnexOpen].includes(index))
  
  if (result.indexOf(close) !== -1) {
    return findAndSubstracInternal(result)
  } else {
    return !!result.length
  }
}

console.clear()

parenthesisChecker('((()))()()') //good
parenthesisChecker('((') //bad
parenthesisChecker('(())()') //good
parenthesisChecker('(()') //bad
parenthesisChecker('(a + b) * (c + 1)') //good
parenthesisChecker('(a + b) * (c + 1 * ((g + 1) / 2))') //good