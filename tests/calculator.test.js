const { increaseLifePoints, decreaseLifePoints, resetLifePoints } = require('../src/js/calculator');

describe('Life Points Calculator', () => {
    let lifePoints;

    beforeEach(() => {
        lifePoints = 8000; // Starting life points
    });

    test('should increase life points correctly', () => {
        lifePoints = increaseLifePoints(lifePoints, 500);
        expect(lifePoints).toBe(8500);
    });

    test('should decrease life points correctly', () => {
        lifePoints = decreaseLifePoints(lifePoints, 300);
        expect(lifePoints).toBe(7700);
    });

    test('should reset life points to 8000', () => {
        lifePoints = decreaseLifePoints(lifePoints, 1000);
        lifePoints = resetLifePoints();
        expect(lifePoints).toBe(8000);
    });
});