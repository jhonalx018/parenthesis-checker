
const bracketsChecker = (entry) => {
    //brackets
    const responseP = findAndSubstracInternal({
      entry,
    })
  
    
    console.log((responseP && 'Format Error brackets') || 'Format Ok brackets', entry)
  }
  
  const findAndSubstracInternal = ({
    entry,
  }) => {
    const braces = {
      '[': ']',
      '(': ')',
      '{': '}',
    }
  
    const stack = [];
  
    [...entry || ''].forEach((brace) => {
      if (braces[brace]) {
        stack.push(brace)
      } else if (braces[stack[stack.length - 1]] === brace) {
        stack.pop(brace)
      }
    })
  
    return stack.length
  }
  
  console.clear()
  bracketsChecker('{[(])}') //bad
  bracketsChecker('{[{}]}') //god
  bracketsChecker('(())') //god
  bracketsChecker('(()]') //bad
