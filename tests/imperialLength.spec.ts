import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/imperialLength'

describe('Modificación: class ImperialLength test', () => {
  it('Se puede obtener dar y obtener el numero de pulgadas', () => {
    let result = 5;
    let imperial: ImperialLength = new ImperialLength();
    imperial.setPulgadas(result);
    expect(imperial.getPulgadas()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de pies', () => {
    let result = 6;
    let imperial: ImperialLength = new ImperialLength();
    imperial.setPies(result);
    expect(imperial.getPies()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de yardas', () => {
    let result = 7;
    let imperial: ImperialLength = new ImperialLength();
    imperial.setYardas(result);
    expect(imperial.getYardas()).to.be.eql(result);
  });
  it('Se puede obtener dar y obtener el numero de millas', () => {
    let result = 8;
    let imperial: ImperialLength = new ImperialLength();
    imperial.setMillas(result);
    expect(imperial.getMillas()).to.be.eql(result);
  });
  it('Se puede cambiar de unidades de medidas imperiales', () => {
    let pulgadas = 108;
    let imperial: ImperialLength = new ImperialLength();
    imperial.setPulgadas(pulgadas);
    let result = 3;
    expect(imperial.getYardas()).to.be.eql(result);
  });
});