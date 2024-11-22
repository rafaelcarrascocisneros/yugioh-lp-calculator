function increaseLifePoints(currentPoints, amount) {
    return currentPoints + amount;
}

function decreaseLifePoints(currentPoints, amount) {
    return currentPoints - amount;
}

function resetLifePoints() {
    return 8000; // Default starting life points in Yu-Gi-Oh
}

export { increaseLifePoints, decreaseLifePoints, resetLifePoints };