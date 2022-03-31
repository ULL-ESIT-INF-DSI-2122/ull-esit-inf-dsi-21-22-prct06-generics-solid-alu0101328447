import {ImperialMass} from './imperialMass'
import { MetricMass } from './metricMass'

/**
 * # Clase AdapterMass
 */
export class AdapterMass extends MetricMass {
  /**
   * 
   * @param service 
   */
  constructor(private service: ImperialMass) {
    super();
  }

  /**
   * 
   * @returns peso en gramos
   */
  public getGramos(): number {
    return this.getKilogramos() * 1000;
  };

  /**
   * 
   * @returns peso en kilogramos
   */
  public getKilogramos(): number {
    let libraToKilo: number = this.service.getLibras() * 0.4536;
    return libraToKilo;
  };

  /**
   * 
   * @returns peso en toneladas del sistema metrico
   */
  public getToneladas(): number {
    return this.getKilogramos() / 1000;
  };
};
