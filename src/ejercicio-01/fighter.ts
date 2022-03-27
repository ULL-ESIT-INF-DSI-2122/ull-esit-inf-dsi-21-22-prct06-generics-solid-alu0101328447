import { Stats } from './stats'

const type: string = 'Fuego' || 'Agua' || 'Planta' || 'Tierra' || 'Electrico' ||
                     'Aire' || 'Armas' || 'Psiquico' || 'Magico' || 'Normal'; 

export abstract class Fighter {
  constructor(private name: string, private weight: number, private height: number, 
    private habilityName: string, private habilityType: string, 
    private stats: Stats, private cathPrase: string, private type: string, private universe: string) {
    // Empty method
  }

  getName(): string {
    return this.name;
  }

  getWeigth(): number {
    return this.weight;
  }

  getHeight(): number {
    return this.height;
  }

  getHabilityName(): string {
    return this.habilityName;
  }

  getHabilityType(): string {
    return this.habilityType;
  }

  getType(): string {
    return this.type
  }

  getStats(): Stats {
    return this.stats;
  }

  getPhrase(): string {
    return this.cathPrase;
  }

  getUniverse(): string {
    return this.universe;
  }

  getDmg(fighter: Fighter): number {
    return Math.floor(50 * (this.stats.attack / fighter.getStats().defense));
  }

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