import {ImperialMass} from './imperialMass'
import { MetricMass } from './metricMass'

export class AdapterMass extends MetricMass {
  constructor(private service: ImperialMass) {
    super();
  }

  public getGramos(): number {
    return this.getKilogramos() * 1000;
  };

  public getKilogramos(): number {
    let libraToKilo: number = this.service.getLibras() * 0.4536;
    return libraToKilo;
  };

  public getToneladas(): number {
    return this.getKilogramos() / 1000;
  };
};
