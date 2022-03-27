import { Fighter} from "./fighter";

/**
 * # Clase Pokedex
 */
export class Pokedex <T extends Fighter> {
  /**
   * 
   * @param fighters Conjunto de luchadores
   */
  constructor(public fighters: T[]) {

  }
};