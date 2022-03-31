
/**
 * # Clase ImperialMass
 */
export class ImperialMass {
  /**
   * 
   * @param libras 
   */
  constructor(private libras: number = 0) {
      // Empty method
  }

  /**
   * 
   * @returns peso en onzas
   */
  public getOnzas(): number {
    return this.libras * 16;
  };

  /**
   * 
   * @param onzas peso en onzas
   */
  public setOnzas(onzas: number) {
    this.libras = onzas / 16;
  };

  /**
   * 
   * @returns peso en libras
   */
  public getLibras(): number {
    return this.libras;
  };

  /**
   * 
   * @param libras peso en libras
   */
  public setLibras(libras: number) {
    this.libras = libras;
  };

  /**
   * 
   * @returns peso en piedras
   */
  public getPiedras(): number {
    return this.libras / 14;
  };

  /**
   * 
   * @param piedras peso en piedras
   */
  public setPiedras(piedras: number) {
    this.libras = piedras * 14;
  };

  /**
   * 
   * @returns peso en centenas
   */
  public getCentenas(): number {
    return this.libras / 112;
  };

  /**
   * 
   * @param centenas peso en centenas
   */
  public setCentenas(centenas: number) {
    this.libras = centenas * 112;
  }

  /**
   * 
   * @returns peso en toneladas
   */
  public getToneladas(): number {
    return this.getCentenas() / 20;
  };

  /**
   * 
   * @param toneladas peso en toneladas
   */
  public setToneladas(toneladas: number) {
    this.setCentenas(toneladas * 20); 
  }
};