import 'mocha';
import {expect} from 'chai';
import {Documental} from '../../src/ejercicio-02/documental'
import {Stream} from '../../src/ejercicio-02/stream'

describe('Ejercicio-02: clase Documental', () => {
  it('Se pueden buscar por titulo', () => {
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

    let documentales: Documental = new Documental([stream1, stream2]);
    expect(documentales.titleSearch('Los vengadores')).to.be.eql([stream1]);
  });
    it('Se pueden buscar por año', () => {
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

    let documentales: Documental = new Documental([stream1, stream2]);
    expect(documentales.yearSearch({year: 2000, month: 3,day: 5})).to.be.eql([stream1, stream2]);
  });
    it('Se pueden buscar por año', () => {
    let stream1: Stream = {
      title: 'Los vengadores',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Comedia',
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

    let documentales: Documental = new Documental([stream1, stream2]);
    expect(documentales.genreSearch('Comedia')).to.be.eql([stream1]);
  });
    it('Se pueden buscar por año', () => {
    let stream1: Stream = {
      title: 'Los vengadores',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Comedia',
      director: 'Steven',
      length: 100,
      country: 'Spain' 
    }    
    let stream2: Stream = {
      title: 'Los avengers',
      date: {year: 2000, month: 3, day: 5},
      genre: 'Accion',
      director: 'Steven Spilberg',
      length: 100,
      country: 'Spain' 
    }

    let documentales: Documental = new Documental([stream1, stream2]);
    expect(documentales.directorSearch('Steven Spilberg')).to.be.eql([stream2]);
  });
}); 