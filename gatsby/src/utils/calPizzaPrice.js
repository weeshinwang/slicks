const sizes = {
    S: 0.75,
    M: 1,
    L: 1.5,
}

export default function calculatePizzaPrice(price, size) {
    return price * sizes[size]
}