export const getCheckoutDetails = (items) => {
    const { priceTotal, itemsTotal } = items.reduce((acc, cur) => {
        acc.priceTotal += cur.price * cur.qty;
        acc.itemsTotal += cur.qty;

        return acc;
    }, { priceTotal: 0, itemsTotal: 0 })

    return { priceTotal, itemsTotal }
}

export const getTotalAmount = (priceTotal, discountTotal = 1999, deliveryChargesTotal = 10) => {
    return priceTotal === 0 ? 0 : priceTotal - discountTotal + deliveryChargesTotal
}