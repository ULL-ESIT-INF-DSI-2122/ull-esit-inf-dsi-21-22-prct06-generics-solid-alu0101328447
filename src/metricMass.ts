
/**
 * # Clase MetricMass
 */
export class MetricMass {
  /**
   * 
   * @param kilogramos 
   */
  constructor( private kilogramos: number = 0) {
      // Empty method
  };

  /**
   * 
   * @returns peso en gramos
   */
  public getGramos(): number {
    return this.getKilogramos() * 1000;
  };

  /**
   * 
   * @param gramos peso en gramos
   */
  public setGramos(gramos: number) {
    this.kilogramos = gramos / 1000;
  };

  /**
   * 
   * @returns peso en gramos
   */
  public getKilogramos(): number {
    return this.kilogramos;
  };

  /**
   * 
   * @param kilogramos peso en kilogramos
   */
  public setKilogramos(kilogramos: number) {
    this.kilogramos = kilogramos;
  };

  7/**
   * 
   * @returns peso en toneladas del sistema metrico
   */
  public getToneladas(): number {
    return this.getKilogramos() / 1000;
  };

  /**
   * 
   * @param toneladas peso en toneladas del sistema metrico
   */
  public setToneladas(toneladas: number) {
    this.kilogramos = toneladas * 1000;
  };
};