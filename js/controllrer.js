function handleAddWord (vegetable) {
  addVegetable(vegetable)
  renderUlVegetables(vegetables)
}

function handleRemoveWord (elSpan) {
  removeVegetable(elSpan.textContent)
  renderUlVegetables(vegetables)
}

function handleMoveWordUp (elSpan) {
  moveLeft(elSpan.textContent)
  renderUlVegetables(vegetables)
}

function handleMoveWordDown (elSpan) {
  moveLeft(elSpan.textContent)
  renderUlVegetables(vegetables)
}