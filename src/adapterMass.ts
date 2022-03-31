import {ImperialMass} from './imperialMass'
import { MetricMass } from './metricMass'

class Adapter extends MetricMass {
  constructor(private service: ImperialMass) {
    super();
  }

  public getGramos(): number {
    return this.service.getOnzas() * 28.35;
  };

  public getKilogramos(): number {
    let libraToKilo: number = this.service.getLibras() * 0.4536;
    let piedraToKilo: number = this.service.getPiedras() * 6.3503;
    let cenToKilo: number = this.service.getCentenas() * 50.802;
    return libraToKilo + piedraToKilo + cenToKilo;
  };

  public getToneladas(): number {
    return this.service.getToneladas() * 1.016;
  };
}