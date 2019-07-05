const ifFoodEaten = (playerObject, foodObject) => {
  if (
    playerObject.x === foodObject.x &&
    playerObject.y === foodObject.y
  ) {
    console.log('Food eaten');
  }

}
