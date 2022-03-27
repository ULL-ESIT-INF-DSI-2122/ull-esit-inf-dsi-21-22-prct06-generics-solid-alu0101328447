import { Stats } from './stats'

const type: string = 'Fuego' || 'Agua' || 'Planta' || 'Tierra' || 'Electrico' ||
                     'Aire' || 'Armas' || 'Psiquico' || 'Magico' || 'Normal'; 


/**
 * # Clase Fighter
 */
export abstract class Fighter {
  constructor(private name: string, private weight: number, private height: number, 
    private habilityName: string, private habilityType: string, 
    private stats: Stats, private cathPrase: string, private type: string, private universe: string) {
    // Empty method
  }

  /**
   * 
   * @returns nombre del luchador
   */
  getName(): string {
    return this.name;
  }

  /**
   * 
   * @returns peso del luchador
   */
  getWeigth(): number {
    return this.weight;
  }

  /**
   * 
   * @returns altura del luchador
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * 
   * @returns nombre de la habilidad de combate del luchador
   */
  getHabilityName(): string {
    return this.habilityName;
  }

  /**
   * 
   * @returns tipo de la habilidad de combate del luchador
   */
  getHabilityType(): string {
    return this.habilityType;
  }

  /**
   * 
   * @returns tipo del luchador
   */
  getType(): string {
    return this.type
  }

  /**
   * 
   * @returns estadisticas del luchador
   */
  getStats(): Stats {
    return this.stats;
  }

  /**
   * 
   * @returns frase tipica del luchador
   */
  getPhrase(): string {
    return this.cathPrase;
  }

  /**
   * 
   * @returns universo al que pertenece el luchador
   */
  getUniverse(): string {
    return this.universe;
  }

  /**
   * ## getDmg
   * ### Calcula el daño que se le inflinge al enemigo teneido en cuenta su defensa
   * @param fighter Enemigo
   * @returns Daño inflingido al enemigo sin contar el multiplicador de tipos
   */
  getDmg(fighter: Fighter): number {
    return Math.floor(50 * (this.stats.attack / fighter.getStats().defense));
  }

  /**
   * ## typeEfectivity
   * ### Calcula la ventaja de tipo tomando el tipo de ataque y el tipo de luchador que recibe el ataque
   * @param fighter Enemigo
   * @returns el multiplicador de tipo
   */
  typeEfectivity(fighter: Fighter): number {
    if (this.habilityType == fighter.getType()) {
      return 0.5;
    } else if (this.habilityType == 'Fuego') {
      switch(fighter.getType()) { 
        case 'Planta' || 'Aire' || 'Armas': 
            return 2; 
            break; 
        case 'Agua' || 'Tierra' || 'Psiquico' : 
            return 0.5; 
            break; 
        case 'Electrico' || 'Magico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Agua') {
      switch(fighter.getType()) { 
        case 'Planta' || 'Tierra' || 'Psiquico': 
            return 0.5; 
            break; 
        case 'Fuego' || 'Aire' || 'Armas' : 
            return 2; 
            break; 
        case 'Electrico' || 'Magico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Aire') {
      switch(fighter.getType()) { 
        case 'Agua' || 'Magico': 
            return 2; 
            break; 
        case 'Fuego' || 'Tierra' || 'Armas' : 
            return 0.5; 
            break; 
        case 'Electrico' || 'Planta' || 'Psiquico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Tierra') {
      if (fighter.getType() != 'Aire') {
        return 2; 
      } else {
        return 0.5;
      }
    } else if (this.habilityType == 'Electrico') {
      if (fighter.getType() != 'Tierra') {
        return 2; 
      } else {
        return 0.5;
      }
    } else if (this.habilityType == 'Aire') {
      return 2.5;
    } else if (this.habilityType == 'Armas') {
      if ((fighter.getType() == 'Magico') && (this.stats.attack > fighter.getStats().attack)){
        return 5; 
      } else {
        return 2;
      }
    } else if (this.getHabilityType() != 'Normal'){
      return 1.5; // Daño mágico y psiquico
    }

    return 1;
  }

}