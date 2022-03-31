import 'mocha';
import {expect} from 'chai';
import {ImperialMass} from '../src/imperialMass'

describe('Modificación: class ImperialMass test', () => {
  it('Se puede obtener dar y obtener el numero de onzas', () => {
    let result = 5;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setOnzas(result);
    expect(imperial.getOnzas()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de libras', () => {
    let result = 6;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setLibras(result);
    expect(imperial.getLibras()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de piedras', () => {
    let result = 7;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setPiedras(result);
    expect(imperial.getPiedras()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de centenas', () => {
    let result = 8;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setCentenas(result);
    expect(imperial.getCentenas()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de toneladas', () => {
    let result = 9;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setToneladas(result);
    expect(imperial.getToneladas()).to.be.eql(result);
  });
  it('Se puede pasar de una unidad a otra de la masa imperial', () => {
    let libras = 5;
    let imperial: ImperialMass = new ImperialMass();
    imperial.setLibras(libras);
    let result = 80;
    expect(imperial.getOnzas()).to.be.eql(result);
  });
});