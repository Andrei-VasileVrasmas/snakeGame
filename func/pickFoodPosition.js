const pickFoodPosition = (playerPosition) => {
  let foodPosition = null;

  do {
    foodPosition = Math.floor(Math.random() * 380);
  } while (Math.abs(playerPosition - foodPosition) < 20);

  return foodPosition;
}
