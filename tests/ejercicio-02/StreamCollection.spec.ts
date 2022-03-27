import {BasicStreamableCollection} from '../../src/ejercicio-02/StreamCollection'
import {Stream} from '../../src/ejercicio-02/stream'
import {Documental} from '../../src/ejercicio-02/documental'
import {Serie} from '../../src/ejercicio-02/serie'
import { expect } from 'chai';

describe('Ejercicio-02: clase BasicStreamableCollection', () => {
  it('Se pueden añadir elementos a la coleccion', () => {
    let stream1: Stream = {
      title: 'Los vengadores',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }    
    let stream2: Stream = {
      title: 'Los avengers',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }

    let series: BasicStreamableCollection<Stream> = new Serie([stream1]);
    series.addStreamable(stream2);
    expect(series.getStreamable(1)).to.be.eql(stream2);
  });
  it('Se pueden ver el numero de elementos de la coleccion', () => {
    let stream1: Stream = {
      title: 'Los vengadores',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }    
    let stream2: Stream = {
      title: 'Los avengers',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }

    let series: BasicStreamableCollection<Stream> = new Serie([stream1]);
    expect(series.getNumberOfStreamable()).to.be.eql(1);
  });
  it('Se pueden buscar elementos por distintas caracteristicas, como el nombre', () => {
    let stream1: Stream = {
      title: 'Los vengadores',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }    
    let stream2: Stream = {
      title: 'Los avengers',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }

    let series: BasicStreamableCollection<Stream> = new Serie([stream1, stream2]);
    expect(series.titleSearch('Los vengadores')).to.be.eql([stream1]);
  });
});