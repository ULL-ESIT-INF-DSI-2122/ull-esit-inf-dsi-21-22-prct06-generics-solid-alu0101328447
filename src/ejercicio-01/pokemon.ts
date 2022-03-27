import { Stats } from './stats';
import { Fighter } from './fighter'

/**
 * # Clase Pokemon
 */
export class Pokemon extends Fighter {
  /**
   * 
   * @param name 
   * @param weight 
   * @param height 
   * @param habilityName 
   * @param habilityType 
   * @param stats 
   * @param cathPrase 
   * @param type 
   */
  constructor(name: string, weight: number, height: number, habilityName: string, 
    habilityType: string, stats: Stats, cathPrase: string, type: string) {
    super(name, weight, height, habilityName, habilityType, stats, cathPrase, type, 'Pokemon');
  }

  /**
   * ## efectivity
   * ### Calcula la efectividad dependiendo del tipo y el universo del contrario
   * @param fighter Enemigo
   * @returns Multiplicador de tipo
   */
  efectivity(fighter: Fighter): number {
    let result: number = 1;

    switch(fighter.getUniverse()) {
      case 'Marvel' || 'DC': 
        result *= 0.5;
        break;
      case 'Star Wars' || 'Dragon Ball': 
        result *= 2;
        break;
      default: 
        // En este caso la efectividad no cambia
        break;
    }

    result *= this.typeEfectivity(fighter);

    return result;
  }
}