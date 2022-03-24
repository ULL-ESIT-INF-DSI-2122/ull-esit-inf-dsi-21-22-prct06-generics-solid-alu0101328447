import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/ejercicio-01'

describe('Ejercicio-01: test de la clase Rational', () => {
  it('Se pueden sumar dos numeros racionales', () => {
    let r1: Rational = new Rational(4, 1);
    let r2: Rational = new Rational(9, 3);
    let result: Rational = new Rational(21, 3);
    expect(r1.add(r2)).to.be.eql(result);
  });
  it('Se pueden restar dos numeros racionales', () => {
    let r1: Rational = new Rational(4, 1);
    let r2: Rational = new Rational(9, 3);
    let result: Rational = new Rational(3, 3);
    expect(r1.substract(r2)).to.be.eql(result);
  });
  it('Se pueden multiplicar dos numeros racionales', () => {
    let r1: Rational = new Rational(4, 1);
    let r2: Rational = new Rational(9, 3);
    let result: Rational = new Rational(36, 3);
    expect(r1.multiply(r2)).to.be.eql(result);
  });
  it('Se pueden dividir dos numeros racionales', () => {
    let r1: Rational = new Rational(4, 1);
    let r2: Rational = new Rational(9, 3);
    let result: Rational = new Rational(12, 9);
    expect(r1.divide(r2)).to.be.eql(result);
  });
})