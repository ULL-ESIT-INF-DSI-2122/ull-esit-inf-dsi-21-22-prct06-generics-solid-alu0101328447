import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../../src/ejercicio-03/cifrado'

describe('Ejercicio-03: clase Cifrado', () => {
  it('Se pueden cifrar mensajes', () => {
    let c1: Cifrado = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE');
    expect(c1.cifrado()).to.be.eq('JZLVIUEOZWWXALVWOBV');
  });
  it('Se pueden descifrar mensajes', () => {
    let c1: Cifrado = new Cifrado('JZLVIUEOZWWXALVWOBV', 'CLAVE');
    expect(c1.descifrado()).to.be.eq('HOLAESTOESUNAPRUEBA');
  });
});
