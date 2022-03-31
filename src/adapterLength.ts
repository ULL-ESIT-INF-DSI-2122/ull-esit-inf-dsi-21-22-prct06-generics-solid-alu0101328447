import { ImperialLength } from './imperialLength'
import { MetricLength } from './metricLength'

class AdapterLength extends MetricLength {
  constructor(private service: ImperialLength) {
    super();
  };

  public getMetros(): number {
    return this.service.getYarda() * 0.9144;
  };
};