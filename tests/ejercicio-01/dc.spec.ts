import 'mocha';
import {expect} from 'chai';
import {DC} from '../../src/ejercicio-01/dc'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: class DC test', () => {
  it('Se pueden obtener el nombre de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');
    expect(batman.getName()).to.be.equal('Batman');
  });
  it('Se pueden obtener el nombre de la habilidad de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');
    expect(batman.getHabilityName()).to.be.equal('Batarang');
  });
  it('Se pueden obtener el tipo de la habilidad de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');
    expect(batman.getHabilityType()).to.be.equal('Armas');
  });
  it('Se pueden obtener la altura de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    expect(batman.getHeight()).to.be.equal(1.8);
  });
  it('Se pueden obtener el peso de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    expect(batman.getWeigth()).to.be.equal(88);
  });
  it('Se pueden obtener la frase tipica de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    expect(batman.getPhrase()).to.be.equal('Bat-Buenas noches Gotham');
  });
  it('Se pueden obtener el tipo de los personajes de DC', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    expect(batman.getType()).to.be.equal('Normal');
  });
  it('Se pueden obtener la efectividad de su ataque', () => {
    let batman: DC = new DC('Batman', 88, 1.87, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let joker: DC = new DC('Joker', 70, 1.77, 'Trampa', 'Armas',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Ha Ha Ha Ha', 'Normal');

    expect(batman.efectivity(joker)).to.be.equal(2);
  });
  it('Se pueden obtener el daño que realiza', () => {
    let batman: DC = new DC('Batman', 88, 1.80, 'Batarang', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bat-Buenas noches Gotham', 'Normal');

    let joker: DC = new DC('Joker', 70, 1.77, 'Trampa', 'Armas',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Ha Ha Ha Ha', 'Normal');

    expect(batman.getDmg(joker)).to.be.equal(75);
  });
})