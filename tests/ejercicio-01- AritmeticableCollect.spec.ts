import 'mocha';
import {expect} from 'chai';
import {ArithmeticableCollection} from '../src/ejercicio-01'
import {Rational} from '../src/ejercicio-01'
import {Complex} from '../src/ejercicio-01'
import {Arithmeticable} from '../src/ejercicio-01'

describe('Ejercicio-01: clase ArithmeticableCollection', () => {
  it('Se pueden añadir numeros aritméticos', () => {
    let c1: Complex = new Complex(5, 4);
    let r1: Rational = new Rational(4, 1);
    let x: ArithmeticableCollection<Rational | Complex> = new ArithmeticableCollection([c1]);
    let result: ArithmeticableCollection<Rational | Complex> = new ArithmeticableCollection([c1, r1]);

    x.addArithmeticable(r1)
    expect(x).to.be.eql(result);
  });
  it('Se puede hacer un get', () => {
    let c1: Complex = new Complex(5, 4);
    let r1: Rational = new Rational(4, 1);
    let x: ArithmeticableCollection<Rational | Complex> = new ArithmeticableCollection([c1, r1]);
    expect(x.getArithmeticable(0)).to.be.eql(c1);
  });
  it('Se puede obtener el numero de elementos', () => {
    let c1: Complex = new Complex(5, 4);
    let r1: Rational = new Rational(4, 1);
    let x: ArithmeticableCollection<Rational | Complex> = new ArithmeticableCollection([c1, r1]);
    expect(x.getNumberOfArithmeticables()).to.be.eql(2);
  });
});