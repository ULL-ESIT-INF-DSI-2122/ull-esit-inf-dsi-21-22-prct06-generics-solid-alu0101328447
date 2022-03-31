import { ImperialLength } from './imperialLength'
import { MetricLength } from './metricLength'

export class AdapterLength extends MetricLength {
  constructor(private service: ImperialLength) {
    super();
  };

  public getCentimetros(): number {
    return this.getMetros() * 100;
  }

  public getMetros(): number {
    return this.service.getYardas() * 0.9144;
  };

  public getKilometros(): number {
    return this.getMetros() / 1000;
  }
};