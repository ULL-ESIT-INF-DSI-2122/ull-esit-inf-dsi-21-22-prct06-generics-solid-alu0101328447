
/**
 * # Clase ImperialLength
 */
export class ImperialLength {
  /**
   * 
   * @param yarda 
   */
  constructor(private yarda: number = 0) {
    // Empty method
  };

  /**
   * 
   * @returns distancia en pulgadas
   */
  getPulgadas(): number {
    return this.yarda * 36;
  };

  /**
   * 
   * @param pulgada distancia en pulgadas
   */
  setPulgadas(pulgada: number) {
    this.yarda = pulgada / 36;
  };

  /**
   * 
   * @returns distancia en pies
   */
  getPies(): number {
    return this.yarda * 3;
  };

  /**
   * 
   * @param pie distancia en pies
   */
  setPies(pie: number) {
    this.yarda = pie / 3;
  };

  /**
   * 
   * @returns distancia en yardas
   */
  getYardas(): number {
    return this.yarda;
  };

  /**
   * 
   * @param yarda distancia en yardas
   */
  setYardas(yarda: number) {
    this.yarda = yarda;
  };

  /**
   * 
   * @returns distancia en millas
   */
  getMillas(): number {
    return this.yarda / 1760 ;
  };

  /**
   * 
   * @param milla distancia en millas
   */
  setMillas(milla: number) {
    this.yarda = milla * 1760;
  };
};
