
export class ImperialMass {
  constructor(private onzas: number = 0, private libras: number = 0, 
    private piedras: number = 0, private centenas: number = 0, private toneladas: number = 0) {
      // Empty method
  }

  public getOnzas(): number {
    return this.onzas;
  };

  public getLibras(): number {
    return this.libras;
  };

  public getPiedras(): number {
    return this.piedras;
  };

  public getCentenas(): number {
    return this.centenas;
  };

  public getToneladas(): number {
    return this.toneladas;
  };
};