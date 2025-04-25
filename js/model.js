const bannedVegetables = []
const vegetables = []

function isVegetableAlreadyExists(vegetable) {
  return vegetables.includes(vegetable)
}

function isVegetableBanned(vegetable) {
  return bannedVegetables.includes(vegetable)
}

function addVegetable(vegetable) {
  if (vegetable !== '') {
    if (!isVegetableAlreadyExists(vegetable)) {
      if (!isVegetableBanned(vegetable)) {
        vegetables.push(vegetable)
      }
    }
  }
}

function removeVegetable(vegetable) {
  const hasVegetable = isVegetableAlreadyExists(vegetable)
  if (hasVegetable) {
    const idx = vegetables.indexOf(vegetable)
    vegetables.splice(idx, 1)
  }
}

function updateVegetable(oldVegetable, newVegetable) {
  const hasVegetable = isVegetableAlreadyExists(oldVegetable)
  if (hasVegetable) {
    const idx = vegetables.indexOf(oldVegetable)
    vegetables.splice(idx, 1, newVegetable)
  }
}


function moveLeft (vegetable) {
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

