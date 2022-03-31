
export class MetricMass {
  constructor( private kilogramos: number = 0) {
      // Empty method
  };

  public getGramos(): number {
    return this.getKilogramos() * 1000;
  };

  public setGramos(gramos: number) {
    this.kilogramos = gramos / 1000;
  };

  public getKilogramos(): number {
    return this.kilogramos;
  };

  public setKilogramos(kilogramos: number) {
    this.kilogramos = kilogramos;
  };

  public getToneladas(): number {
    return this.getKilogramos() / 1000;
  };

  public setToneladas(toneladas: number) {
    this.kilogramos = toneladas * 1000;
  };
};