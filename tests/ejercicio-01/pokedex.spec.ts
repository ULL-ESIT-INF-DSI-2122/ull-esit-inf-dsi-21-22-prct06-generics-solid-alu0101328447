import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio-01/pokedex'
import {DC} from '../../src/ejercicio-01/dc'
import {Pokemon} from '../../src/ejercicio-01/pokemon'
import {Marvel} from '../../src/ejercicio-01/marvel'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: Pokedex class Test', () => {
  it('Se pueden guardar los peleadores en la pokedex', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    let pokedex: Pokedex<DC| Pokemon | Marvel> = new Pokedex ([batman, pikachu, wanda]);
    expect(pokedex.fighters).to.be.eql([batman, pikachu, wanda]);
  });
  it('Se pueden añadir los peleadores a la pokedex', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    let pokedex: Pokedex<DC| Pokemon | Marvel> = new Pokedex ([batman]);
    pokedex.fighters.push(pikachu);
    expect(pokedex.fighters).to.be.eql([batman, pikachu]);
  });
  it('Se pueden seleccionar los peleadores a la pokedex', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    let pokedex: Pokedex<DC| Pokemon | Marvel> = new Pokedex ([batman, pikachu, wanda]);
    expect(pokedex.fighters[1]).to.be.eql(pikachu);
  });
})