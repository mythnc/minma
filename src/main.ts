import { CatOwner } from './petOwner';
import { Cat } from './animal';

let catOwner: CatOwner = new CatOwner();
let cCat: Cat = new Cat('C', {point: 0, coefficient: 1});
let kyanCat: Cat = new Cat('Kyan', {point: 0, coefficient: 2});
catOwner.addPet(cCat);
catOwner.addPet(kyanCat);
