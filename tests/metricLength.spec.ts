import 'mocha';
import {expect} from 'chai';
import {MetricLength} from '../src/metricLength'

describe('Modificación: class MetricLength test', () => {
  it('Se puede obtener dar y obtener el numero de centimetros', () => {
    let result = 5;
    let imperial: MetricLength = new MetricLength();
    imperial.setCentimetros(result);
    expect(imperial.getCentimetros()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de metros', () => {
    let result = 5;
    let imperial: MetricLength = new MetricLength();
    imperial.setMetros(result);
    expect(imperial.getMetros()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de kilometros', () => {
    let result = 5;
    let imperial: MetricLength = new MetricLength();
    imperial.setKilometros(result);
    expect(imperial.getKilometros()).to.be.eql(result);
  });
  it('Se puede cambiar de unidades en el sistema imperial', () => {
    let kilometros = 4;
    let imperial: MetricLength = new MetricLength();
    imperial.setKilometros(kilometros);
    let result = 4000;
    expect(imperial.getMetros()).to.be.eql(result);
  });
});