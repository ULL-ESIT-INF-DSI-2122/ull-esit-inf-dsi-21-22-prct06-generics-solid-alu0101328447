import { Fighter} from "./fighter";


export class Pokedex <T extends Fighter> {
  constructor(public fighters: T[]) {

  }
};