import 'mocha';
import {expect} from 'chai';
import {AdapterMass} from '../src/adapterMass'
import {ImperialMass} from '../src/imperialMass'
import {MetricMass} from '../src/metricMass'

describe('Modificación: class AdapterMass test', () => {
  it('Se puede pasar de libras a kilogramos', () => {
    // Initialization of systems A and B
    const imperial = new ImperialMass(8);
    const adapter = new AdapterMass(imperial);
    let result: number = 3.6288;
    expect(adapter.getKilogramos()).to.be.eql(result);
  });
  it('Se puede pasar de libras a gramos', () => {
    // Initialization of systems A and B
    const imperial = new ImperialMass(8);
    const adapter = new AdapterMass(imperial);
    let result: number = 3628.8;
    expect(adapter.getGramos()).to.be.eql(result);
  });
  it('Se puede pasar de libras a toneladas', () => {
    // Initialization of systems A and B
    const imperial = new ImperialMass(8);
    const adapter = new AdapterMass(imperial);
    let result: number = 0.0036288;
    expect(adapter.getToneladas()).to.be.eql(result);
  });
});

