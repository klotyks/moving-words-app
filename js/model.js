const bannedVegetables = []
const vegetables = []

function addVegetable(vegetable) {
  if (vegetable.text === '') return
  vegetables.push(vegetable)

}

function hasVegetableByText(vegetableText) {
  for (const vegetable of vegetables) {
    if (vegetable.text === vegetableText) return true
  }
  return false
}
function getVegetableByText(vegetableText) {
  for (const vegetable of vegetables) {
    if (vegetable.text === vegetableText) return vegetable
  }
  return null
}

function isVegetableBanned(vegetable) {
  return bannedVegetables.includes(vegetable)
}

function createVegetableByText(vegetable) {
  return { text: vegetable, isEditable: false }
}

function addVegetableByText(vegetableText) {
  if (hasVegetableByText(vegetableText)) return
  addVegetable(createVegetableByText(vegetableText))
}

function getEditableVegetable() {
  for (const vegetable of vegetables) {
    if (vegetable.isEditable) return vegetable
  }
  return null
}

function removeVegetable(vegetable) {
  // const hasVegetable = isVegetableAlreadyExists(vegetable)
  if (hasVegetableByText) {
    const idx = vegetables.indexOf(vegetable)
    vegetables.splice(idx, 1)
  }
}

function updateVegetable(newVegetable) {
  const vegetable = getEditableVegetable()
  if(vegetable){
    vegetable.text = newVegetable
    vegetable.isEditable = false
  }

  // const hasVegetable = isVegetableAlreadyExists(oldVegetable)
  // if (hasVegetable) {
  //   const idx = vegetables.indexOf(oldVegetable)
  //   vegetables.splice(idx, 1, newVegetable)
  // }
}
function toggleVegetableByText(vegetableText, isEdit) {
  if (!hasVegetableByText(vegetableText)) return
  const vegetable = getVegetableByText(vegetableText)
  vegetable.isEditable = isEdit
}

function moveLeft(vegetable) {
  if (vegetables.includes(vegetable)) {
    const idx = vegetables.indexOf(vegetable)
    const tempVegetable = vegetables[idx]
    const nextVegetable = vegetables[idx - 1]
    if (nextVegetable !== undefined) {
      vegetables[idx] = nextVegetable
      vegetables[idx - 1] = tempVegetable
    } else {
      console.log('вы уткнулись в конец')
    }
  } else {
    console.log('ваше слово отсутствует')
  }
}

function moveRight(vegetable) {
  if (vegetables.includes(vegetable)) {
    const idx = vegetables.indexOf(vegetable)
    const tempVegetable = vegetables[idx]
    const nextVegetable = vegetables[idx + 1]
    if (nextVegetable !== undefined) {
      vegetables[idx] = nextVegetable
      vegetables[idx + 1] = tempVegetable
    } else {
      console.log('вы уткнулись в конец')
    }
  } else {
    console.log('ваше слово отсутствует')
  }
}
// vegetables
// addVegetableByText('apple')
// vegetables
 