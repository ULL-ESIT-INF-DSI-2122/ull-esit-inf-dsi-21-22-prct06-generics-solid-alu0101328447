
export class MetricMass {
  constructor(private gramos: number = 0, private kilogramos: number = 0, 
    private toneladas: number = 0) {
      // Empty method
  };

  public getGramos(): number {
    return this.gramos;
  };

  public getKilogramos(): number {
    return this.kilogramos;
  };

  public getToneladas(): number {
    return this.toneladas;
  };
};