function onClickButtonAddVegetable() {
  const elInput = document.querySelector('input')
  const vegetable = elInput.value
  elInput.value = ''
  elInput.focus()
  addVegetable(vegetable)
  renderUlVegetables(vegetables)
}

function onClickButtonButtonChange(e) {
  const elLi = e.target.closest('li')
  const elSpan = elLi.querySelector('span')
  const asking = elSpan.textContent
  const answer = prompt(asking)
  if (answer === null) return
  if (answer === '') return
  updateVegetable(asking, answer)
  renderUlVegetables(vegetables)
}

function onClickButtonRemoveVegetable(e) {
  const elLi = e.target.closest('li')
  elSpan = elLi.querySelector('span')
  removeVegetable(elSpan.textContent)
  renderUlVegetables(vegetables)
}

function onClcikButtonChangePositionUp (e) {
  const elLi = e.target.closest('li')
  elSpan = elLi.querySelector('span')
  moveLeft(elSpan.textContent)
  renderUlVegetables(vegetables)
 
}
function onClcikButtonChangePositionDown (e) {
  const elLi = e.target.closest('li')
  elSpan = elLi.querySelector('span')
  moveRight(elSpan.textContent)
  // console.log(moveRight('cucumber'))
  renderUlVegetables(vegetables)
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
  elLi.classList.add('vegetable')
  elSpan.textContent = vegetable
  elLi.appendChild(elSpan)
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

// добавить возможность удалять овощ

document.querySelector('button').onclick = onClickButtonAddVegetable

// renderUlVegetables(vegetables)
