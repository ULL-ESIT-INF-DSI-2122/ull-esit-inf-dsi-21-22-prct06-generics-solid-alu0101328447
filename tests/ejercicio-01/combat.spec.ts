import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-01/combat'
import {DC} from '../../src/ejercicio-01/dc'
import {Pokemon} from '../../src/ejercicio-01/pokemon'
import {Marvel} from '../../src/ejercicio-01/marvel'
import {DragonBall} from '../../src/ejercicio-01/dragonBall'
import {StarWars} from '../../src/ejercicio-01/starWars'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: clase Combat Test', () => {
  it('Se enfrentar dos personajes de distintos universos', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let coliseo: Combat<DC| Pokemon | Marvel> = new Combat (batman, pikachu);
    expect(coliseo.combatResult()).to.be.eql(batman.getName());
  });
  it('Se enfrentar dos personajes del mismo universo', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let joker: DC = new DC('Joker', 70, 1.77, 'Trampa', 'Armas',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Ha Ha Ha Ha', 'Normal');

    let coliseo: Combat<DC| Pokemon | Marvel> = new Combat (batman, joker);
    expect(coliseo.combatResult()).to.be.eql(batman.getName());
  });
});