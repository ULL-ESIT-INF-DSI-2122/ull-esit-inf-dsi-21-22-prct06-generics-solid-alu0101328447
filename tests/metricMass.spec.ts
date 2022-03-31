import 'mocha';
import {expect} from 'chai';
import {MetricMass} from '../src/metricMass'

describe('Modificación: class MetricMass test', () => {
  it('Se puede obtener dar y obtener el numero de gramos', () => {
    let result = 5;
    let imperial: MetricMass = new MetricMass();
    imperial.setGramos(result);
    expect(imperial.getGramos()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de kilogramos', () => {
    let result = 5;
    let imperial: MetricMass = new MetricMass();
    imperial.setKilogramos(result);
    expect(imperial.getKilogramos()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de toneladas', () => {
    let result = 5;
    let imperial: MetricMass = new MetricMass();
    imperial.setToneladas(result);
    expect(imperial.getToneladas()).to.be.eql(result);
  });
  it('Se puede realizar cambios de unidad en el sistema metrico', () => {
    let kilogramos = 6;
    let imperial: MetricMass = new MetricMass();
    imperial.setKilogramos(kilogramos);
    let result = 6000;
    expect(imperial.getGramos()).to.be.eql(result);
  });
});