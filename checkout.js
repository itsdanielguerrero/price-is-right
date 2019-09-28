function calculateItemTotal(item) {
  const total = item.price * (1 - item.discount) * item.quantity
  item.total = parseInt(total * 100) / 100

  return item
}

function calculateTotal(items) {
  //using mapping to calculate total price of each item in object array.
  return items.map(calculateItemTotal)
}

module.exports = calculateTotal
