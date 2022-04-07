import { Pokemon } from "./pokemon";
import { Stats } from "./stats";


/**
 * # Clase ElectricPokemon
 */
export class ElectricPokemon implements Pokemon {
  private readonly type_ = 'Electrico';

  /**
   * 
   * @param name 
   * @param weight 
   * @param height 
   * @param stats 
   */
  constructor(private name: string, private weight: number, 
    private height: number, private stats: Stats) {
  }

  /**
   * 
   * @returns nombre del pokemon
   */
  getName(): string {
    return this.name;
  }

  /**
   * 
   * @returns peso del pokemon
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * 
   * @returns altura del pokemon
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * 
   * @returns potencia de ataque del pokemon
   */
  getAttack(): number {
    return this.stats.attack;
  }

  /**
   * 
   * @returns defensa del pokemon
   */
  getDeff(): number {
    return this.stats.defense;
  }

  /**
   * 
   * @returns puntos de vida del pokemon
   */
  getHP(): number {
    return this.stats.HP;
  }

  /**
   * 
   * @returns velocidad del pokemon
   */
  getSpeed(): number {
    return this.stats.speed;
  }

  /**
   * 
   * @returns tipo del pokemon
   */
  type(): string {
    return this.type_;
  }

  /*
   * 
   * @param type 
   * @returns Efectividad de ataque sobre el tipo del otro pokemon
   /
  pokeEffectivity(type: string): number {
    switch(type) { 
      case 'Agua': 
          return 2; 
          break; 
      
      case 'Planta': 
          return 0.5; 
          break; 
      
      default: 
          return 1; 
          break; 
    } 
  }*/

};

