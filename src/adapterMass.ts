import {ImperialMass} from './imperialMass'
import { MetricMass } from './metricMass'

class AdapterMass extends MetricMass {
  constructor(private service: ImperialMass) {
    super();
  }

  public getKilogramos(): number {
    let libraToKilo: number = this.service.getLibras() * 0.4536;
    return libraToKilo;
  };

}