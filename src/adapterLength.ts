import { ImperialLength } from './imperialLength'
import { MetricLength } from './metricLength'

/**
 * # Clase ApadpterLength
 */
export class AdapterLength extends MetricLength {

  /**
   * 
   * @param service 
   */
  constructor(private service: ImperialLength) {
    super();
  };

  /**
   * 
   * @returns distancia en centimetros
   */
  public getCentimetros(): number {
    return this.getMetros() * 100;
  }

  /**
   * 
   * @returns distancia en metros
   */
  public getMetros(): number {
    return this.service.getYardas() * 0.9144;
  };

  /**
   * 
   * @returns distancia en kilometros
   */
  public getKilometros(): number {
    return this.getMetros() / 1000;
  };
};