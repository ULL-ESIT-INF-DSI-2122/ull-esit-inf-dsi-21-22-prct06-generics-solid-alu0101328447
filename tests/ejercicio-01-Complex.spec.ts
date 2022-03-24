import 'mocha';
import {expect} from 'chai';
import {Complex} from '../src/ejercicio-01'

describe('Ejercicio-01: test de la clase complex', () => {
  it('Se pueden sumar dos numeros complejos', () => {
    let c1: Complex = new Complex(5, 4);
    let c2: Complex = new Complex(8, 1);
    let result: Complex = new Complex(13, 5);
    expect(c1.add(c2)).to.be.eql(result);
  });
  it('Se pueden restar dos numeros complejos', () => {
    let c1: Complex = new Complex(5, 4);
    let c2: Complex = new Complex(8, 1);
    let result: Complex = new Complex(-3, 3);
    expect(c1.substract(c2)).to.be.eql(result);
  });
  it('Se pueden multiplicar dos numeros complejos', () => {
    let c1: Complex = new Complex(5, 4);
    let c2: Complex = new Complex(8, 1);
    let result: Complex = new Complex(36, 37);
    expect(c1.multiply(c2)).to.be.eql(result);
  });
  it('Se pueden dividir dos numeros complejos', () => {
    let c1: Complex = new Complex(5, 4);
    let c2: Complex = new Complex(8, 1);
    let result: Complex = new Complex(0.676923076923077,-0.4153846153846154 );
    expect(c1.divide(c2)).to.be.eql(result);
  });
})