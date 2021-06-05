
/*
    TODO check internal elements to check if any error exist
*/
const cleanUp = ({
    entry,
    open,
    close
  }) => {
    return [...entry || []].filter(letter => [open, close].includes(letter))
  }
  
  const bracketsChecker = (entry) => {
  
    //parenthesis
    const responseP = findAndSubstracInternal({
      entry,
      open: '(',
      close: ')'
    })
    
    const responseBrackets = findAndSubstracInternal({
      entry,
      open: '[',
      close: ']'
    })
  
    const responseBraces = findAndSubstracInternal({
      entry,
      open: '{',
      close: '}'
    })
  
    console.log((responseBrackets && 'Format Error Brakects') || 'Format Ok Brakects', entry)
    console.log((responseBraces && 'Format Error Braces') || 'Format Ok Braces', entry)
    console.log((responseP && 'Format Error Parenthesis') || 'Format Ok Parenthesis', entry)
  }
  
  const findAndSubstracInternal = ({
    entry,
    open,
    close
  }) => {
    entry = cleanUp({ entry, open, close })
    const indexClose = entry.indexOf(close)
    const partial = entry.slice(0, indexClose)
    
    let indexOpen;
  
    innerLabel:
    for (let reverseIndex = partial.length - 1; reverseIndex >= 0; reverseIndex--) {
      if (partial[reverseIndex] === open) {
        indexOpen = reverseIndex
  
        break innerLabel;
      }
    }
    
    //using explicit validation because with can get a index in 0
    if(indexOpen === undefined && entry.length) {
      return true
    }
  
    const result = entry.filter((_, index) => ![indexClose, indexOpen].includes(index))
    
    if (result.indexOf(close) !== -1) {
      return findAndSubstracInternal(result)
    } else {
      return !!result.length
    }
  }
  
  console.clear()
  
  bracketsChecker('{[}') //bad