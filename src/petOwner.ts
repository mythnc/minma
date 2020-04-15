import { IAnimal, CatFood } from './animal';

interface IPetOwner {
    pets: IAnimal[];

    feed(pet: IAnimal, food: any): boolean | undefined;
    addPet(pet: IAnimal): void;
}

export class CatOwner implements IPetOwner {
    pets: IAnimal[] = [];

    feed(pet: IAnimal, catfood: CatFood): boolean | undefined {
        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i] === pet) {
                return this.pets[i].eat(catfood);
            }
        }
        return undefined;
    }

    addPet(pet: IAnimal): void {
        this.pets.push(pet);
    }

    checkHungry(pet: IAnimal): boolean | undefined {
        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i] === pet) {
                return this.pets[i].isHungry();
            }
        }
        return undefined;
    }
}
