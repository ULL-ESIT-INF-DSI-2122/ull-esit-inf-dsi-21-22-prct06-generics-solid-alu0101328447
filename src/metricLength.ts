/**
 * # Clase MetricLength
 */
export class MetricLength {
  /**
   * 
   * @param metros 
   */
  constructor(private metros: number = 0) {
    // EmptyMethod
  };

  /**
   * 
   * @returns distancia en centimetros
   */
  public getCentimetros(): number {
    return this.getMetros() * 100;
  };

  /**
   * 
   * @param centimetros distancia en centimetros
   */
  public setCentimetros(centimetros: number) {
    this.setMetros(centimetros / 100);
  };

  /**
   * 
   * @returns distancia en metros
   */
  public getMetros(): number {
    return this.metros;
  };

  /**
   * 
   * @param metros distancia en metros
   */
  public setMetros(metros: number) {
    this.metros = metros;
  };

  /**
   * 
   * @returns distancia en kilometros
   */
  public getKilometros(): number {
    return this.getMetros() / 1000;
  };

  /**
   * 
   * @param kilometros distancia en kilometros
   */
  public setKilometros(kilometros: number) {
    this.setMetros(kilometros * 1000);
  };

};