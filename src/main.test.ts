import { CatOwner } from './petOwner';
import { Cat, CatFood } from './animal';

test('cCatNotHungry', () => {
    let catOwner: CatOwner = new CatOwner();
    let cCat: Cat = new Cat('C', {point: 0, coefficient: 1});
    catOwner.addPet(cCat);

    for (let i = 0; i < 5; i++) {
        cCat.play();
    }
    expect(cCat.hunger.point).toBe(50);
    expect(cCat.isHungry()).toBeFalsy();
    expect(cCat.eat(CatFood.Tuna)).toBeFalsy();
    expect(catOwner.checkHungry(cCat)).toBeFalsy();
    expect(catOwner.feed(cCat, CatFood.Snack)).toBeFalsy();
    expect(cCat.hunger.point).toBe(50);
});

test('cCatIsHungry', () => {
    let catOwner: CatOwner = new CatOwner();
    let cCat: Cat = new Cat('C', {point: 0, coefficient: 1});
    catOwner.addPet(cCat);

    for (let i = 0; i < 9; i++) {
        cCat.play();
    }
    expect(cCat.hunger.point).toBe(90);
    expect(cCat.isHungry()).toBeTruthy();
    expect(catOwner.checkHungry(cCat)).toBeTruthy();
    expect(cCat.eat(CatFood.Snack)).toBeTruthy();
    expect(cCat.hunger.point).toBe(50);
    expect(cCat.eat(CatFood.Snack)).toBeFalsy();
    expect(cCat.hunger.point).toBe(50);
});

test('cCatIsCrazy', () => {
    let catOwner: CatOwner = new CatOwner();
    let cCat: Cat = new Cat('C', {point: 0, coefficient: 1});
    catOwner.addPet(cCat);

    for (let i = 0; i < 10; i++) {
        cCat.play();
    }
    expect(cCat.hunger.point).toBe(100);
    expect(cCat.isCrazy()).toBeTruthy();
    expect(cCat.isHungry()).toBeTruthy();
    expect(catOwner.feed(cCat, CatFood.Tuna)).toBeFalsy();
    expect(catOwner.feed(cCat, CatFood.Snack)).toBeFalsy();
    expect(catOwner.checkHungry(cCat)).toBeTruthy();
});

test('kyanCatNotHungry', () => {
    let catOwner: CatOwner = new CatOwner();
    let kyanCat: Cat = new Cat('Kyan', {point: 0, coefficient: 2});
    catOwner.addPet(kyanCat);

    for (let i = 0; i < 2; i++) {
        kyanCat.play();
    }

    expect(kyanCat.hunger.point).toBe(40);
    expect(kyanCat.isHungry()).toBeFalsy();
    expect(catOwner.checkHungry(kyanCat)).toBeFalsy();
    expect(kyanCat.eat(CatFood.Tuna)).toBeFalsy();
    expect(catOwner.feed(kyanCat, CatFood.Snack)).toBeFalsy();
    expect(kyanCat.hunger.point).toBe(40);
});

test('kyanCatIsHungry', () => {
    let catOwner: CatOwner = new CatOwner();
    let kyanCat: Cat = new Cat('Kyan', {point: 0, coefficient: 2});
    catOwner.addPet(kyanCat);

    for (let i = 0; i < 3; i++) {
        kyanCat.play();
    }
    expect(kyanCat.hunger.point).toBe(60);
    expect(kyanCat.isHungry()).toBeTruthy();
    expect(catOwner.checkHungry(kyanCat)).toBeTruthy();
    expect(catOwner.feed(kyanCat, CatFood.Tuna)).toBeTruthy();
    expect(kyanCat.hunger.point).toBe(0);
    expect(kyanCat.isHungry()).toBeFalsy();
    expect(catOwner.checkHungry(kyanCat)).toBeFalsy();
});

test('kyanCatIsCrazy', () => {
    let catOwner: CatOwner = new CatOwner();
    let kyanCat: Cat = new Cat('Kyan', {point: 0, coefficient: 2});
    catOwner.addPet(kyanCat);

    for (let i = 0; i < 5; i++) {
        kyanCat.play();
    }

    expect(kyanCat.hunger.point).toBe(100);
    expect(kyanCat.isCrazy()).toBeTruthy();
    expect(kyanCat.isHungry()).toBeTruthy();
    expect(catOwner.feed(kyanCat, CatFood.Snack)).toBeFalsy();
    expect(catOwner.feed(kyanCat, CatFood.Tuna)).toBeFalsy();
    expect(catOwner.checkHungry(kyanCat)).toBeTruthy();
    expect(kyanCat.hunger.point).toBe(100);
});

test('pythonCatUndefinedBehavior', () => {
    let catOwner: CatOwner = new CatOwner();
    let pythonCat: Cat = new Cat('Python', {point: 0, coefficient: 3});

    for (let i = 0; i < 2; i++) {
        pythonCat.play();
    }

    expect(pythonCat.hunger.point).toBe(60);
    expect(pythonCat.isHungry()).toBeTruthy();

    expect(catOwner.checkHungry(pythonCat)).toBeUndefined();
    expect(catOwner.feed(pythonCat, CatFood.Snack)).toBeUndefined();
    expect(pythonCat.hunger.point).toBe(60);
    expect(catOwner.feed(pythonCat, CatFood.Tuna)).toBeUndefined();
    expect(pythonCat.hunger.point).toBe(60);

    expect(pythonCat.eat(CatFood.Snack)).toBeTruthy();
    expect(pythonCat.hunger.point).toBe(20);

    expect(pythonCat.eat(CatFood.Snack)).toBeFalsy();
    expect(pythonCat.hunger.point).toBe(20);
});
