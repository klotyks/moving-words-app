function onClickButtonAddVegetable() {
  const elInput = document.querySelector('input')
  const vegetable = elInput.value
  handleAddWord(vegetable)
  elInput.value = ''
  elInput.focus()
}

function onClickButtonButtonChange(vegetable) {
  console.log('h1')
  updateVegetable(vegetable)
}

function onClickButtonRemoveVegetable(e) {
  const elLi = e.target.closest('li')
  const elSpan = elLi.querySelector('span')
  handleRemoveWord(elSpan.textContent)
}

function onClcikButtonChangePositionUp (e) {
  const elLi = e.target.closest('li')
  const elSpan = elLi.querySelector('span')
  handleMoveWordUp(elSpan.textContent)
 
}
function onClcikButtonChangePositionDown (e) {
  const elLi = e.target.closest('li')
  const elSpan = elLi.querySelector('span')
  handleMoveWordDown(elSpan.textContent)
}

function renderUlVegetables(vegetables) {
  const elUl = document.querySelector('ul')
  elUl.innerHTML = ''
  for (const vegetable of vegetables) {
    const elLi = generateLiVegetable(vegetable)
    elUl.appendChild(elLi)
  }
}


function generateLiVegetable(vegetable) {
  const elLi = document.createElement('li')
  const elSpan = document.createElement('span')
  const elButtonRemove = generateButtonRemoveVegetable()
  const elButtonChange = generateButtonChangeV()
  const elButtonChanngePositionUp = generateButtonUp()
  const elButtonChanngePositionDown = generateButtonDown()
  const elInputText = generateInputText()

  elSpan.textContent = vegetable
  elLi.classList.add('vegetable')
  elSpan.textContent = vegetable.text
  elInputText.value = vegetable

  if (vegetable.isEditable) {
    elLi.appendChild(elInputText)
  } else {
    elLi.appendChild(elSpan)
  }

  elLi.appendChild(elButtonChange)
  elLi.appendChild(elButtonRemove)
  elLi.appendChild(elButtonChanngePositionUp)
  elLi.appendChild(elButtonChanngePositionDown)
  return elLi
}

function generateButtonRemoveVegetable() {
  const elButton = document.createElement('button')
  elButton.textContent = 'X'
  elButton.classList.add('remove-vegetable')
  elButton.onclick = onClickButtonRemoveVegetable
  return elButton
}
function generateButtonChangeV() {
  const elButton = document.createElement('button')
  elButton.textContent = '📝'
  elButton.onclick = onClickButtonButtonChange
  return elButton
}

function generateButtonUp () {
  const elButton = document.createElement('button')
  elButton.textContent = '🔼'
  elButton.onclick = onClcikButtonChangePositionUp
  return elButton
  
}

function generateButtonDown () {
  const elButton = document.createElement('button')
  elButton.textContent = '🔽'
  elButton.onclick = onClcikButtonChangePositionDown
  return elButton
  
}


function generateInputText () {
  const elInputText = document.createElement('input')
  elInputText.setAttribute('type','text')
  return elInputText
}



document.querySelector('button').onclick = onClickButtonAddVegetable


