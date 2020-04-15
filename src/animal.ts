interface IHunger {
    point: number;
    coefficient: number;
}

export interface IAnimal {
    name: string;
    hunger: IHunger;

    eat(food: any): boolean;
    getHungerStatus(): number;
    isHungry(): boolean;
}

export enum CatFood {
    Snack,
    Tuna,
}

export class Cat implements IAnimal {
    name: string;
    hunger: IHunger;

    constructor(name: string, hunger: IHunger) {
        this.name = name;
        this.hunger = hunger;
    }

    eat(catfood: CatFood): boolean {
        if (this.isCrazy() || !this.isHungry()) {
            return false;
        }
        if (catfood === CatFood.Tuna) {
            this.hunger.point = 0;
        } else if (catfood === CatFood.Snack) {
            this.hunger.point -= 40;
        }
        return true;
    }

    getHungerStatus(): number {
        return this.hunger.point;
    }

    play(): void {
        this.hunger.point += this.hunger.coefficient * 10;
    }

    isCrazy(): boolean {
        return this.hunger.point >= 100;
    }

    isHungry(): boolean {
        return this.hunger.point >= 60;
    }
}
