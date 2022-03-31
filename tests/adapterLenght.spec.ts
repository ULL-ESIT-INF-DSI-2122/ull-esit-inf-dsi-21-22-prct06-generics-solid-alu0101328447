import 'mocha';
import {expect} from 'chai';
import {AdapterLength} from '../src/adapterLength'
import {ImperialLength} from '../src/imperialLength'
import {MetricLength} from '../src/metricLength'

describe('Modificación: class AdapterMass test', () => {
  it('Se puede pasar de yardas a centimetros', () => {
    // Initialization of systems A and B
    const imperial = new ImperialLength(1);
    const adapter = new AdapterLength(imperial);
    let result: number = 91.44;
    expect(adapter.getCentimetros()).to.be.eql(result);
  });
  it('Se puede pasar de yardas a metros', () => {
    // Initialization of systems A and B
    const imperial = new ImperialLength(1);
    const adapter = new AdapterLength(imperial);
    let result: number = 0.9144;
    expect(adapter.getMetros()).to.be.eql(result);
  });
  it('Se puede pasar de yardas a kilometros', () => {
    // Initialization of systems A and B
    const imperial = new ImperialLength(1);
    const adapter = new AdapterLength(imperial);
    let result: number = 0.0009144;
    expect(adapter.getKilometros()).to.be.eql(result);
  });
});