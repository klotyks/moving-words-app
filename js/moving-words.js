const words = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']

function moveRight(word) {
  if (words.includes(word)) {
    const idx = words.indexOf(word)
    const tempWord = words[idx]
    const nextWord = words[idx + 1]
    if (nextWord !== undefined) {
      words[idx] = nextWord
      words[idx + 1] = tempWord
    } else {
      console.log('вы уткнулись в конец')
    }
  } else {
    console.log('ваше слово отсутствует')
  }
}

moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
moveRight('bbb')
words
