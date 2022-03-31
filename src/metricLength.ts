
export class MetricLength {
  constructor(private metros: number = 0) {
    // EmptyMethod
  };

  public getCentimetros(): number {
    return this.getMetros() * 100;
  };

  public setCentimetros(centimetros: number) {
    this.setMetros(centimetros / 100);
  };

  public getMetros(): number {
    return this.metros;
  };

  public setMetros(metros: number) {
    this.metros = metros;
  };

  public getKilometros(): number {
    return this.getMetros() / 1000;
  };

  public setKilometros(kilometros: number) {
    this.setMetros(kilometros * 1000);
  };

};