
function items(state) {
  const cards = Object.entries(state.data)
    .map(([itemId, item]) => ({ ...item, id: itemId }))
    .sort((item1, item2) => (item1.creationTime < item2.creationTime ? 1 : -1));
  console.log(cards);
  return cards;
}

export default items;
