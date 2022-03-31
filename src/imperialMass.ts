
export class ImperialMass {

  constructor(private libras: number = 0) {
      // Empty method
  }

  public getOnzas(): number {
    return this.libras * 16;
  };

  public setOnzas(onzas: number) {
    this.libras = onzas / 16;
  };

  public getLibras(): number {
    return this.libras;
  };

  public setLibras(libras: number) {
    this.libras = libras;
  };

  public getPiedras(): number {
    return this.libras / 14;
  };

  public setPiedras(piedras: number) {
    this.libras = piedras * 14;
  };

  public getCentenas(): number {
    return this.libras / 112;
  };

  public setCentenas(centenas: number) {
    this.libras = centenas * 112;
  }

  public getToneladas(): number {
    return this.getCentenas() / 20;
  };

  public setToneladas(toneladas: number) {
    this.setCentenas(toneladas * 20); 
  }
};