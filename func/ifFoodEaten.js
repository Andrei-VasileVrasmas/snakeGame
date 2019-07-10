const ifFoodEaten = (playerObject, foodObject) => {
  if (
    (Math.abs(playerObject.x - foodObject.x) <= 20) &&
    (Math.abs(playerObject.y - foodObject.y) <= 20)
  ) {
    playerObject.addScore();
    foodObject.reset();
  }
}
