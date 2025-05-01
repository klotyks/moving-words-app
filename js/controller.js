function handleAddWord (vegetable) {
  addVegetable(vegetable)
  renderUlVegetables(vegetables)
}

function handleRemoveWord (elSpan) {
  removeVegetable(elSpan)
  renderUlVegetables(vegetables)
}

function handleMoveWordUp (elSpan) {
  moveLeft(elSpan)
  renderUlVegetables(vegetables)
}

function handleMoveWordDown (elSpan) {
  moveLeft(elSpan)
  renderUlVegetables(vegetables)
}