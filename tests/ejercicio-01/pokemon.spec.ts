import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-01/pokemon'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: class Pokemon test', () => {
  it('Se pueden obtener el nombre de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');
    expect(pikachu.getName()).to.be.equal('Pikachu');
  });
  it('Se pueden obtener el nombre de la habilidad de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');
    expect(pikachu.getHabilityName()).to.be.equal('Rayo');
  });
  it('Se pueden obtener el tipo de la habilidad de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');
    expect(pikachu.getHabilityType()).to.be.equal('Electrico');
  });
  it('Se pueden obtener la altura de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    expect(pikachu.getHeight()).to.be.equal(2);
  });
  it('Se pueden obtener el peso de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    expect(pikachu.getWeigth()).to.be.equal(0.4);
  });
  it('Se pueden obtener la frase tipica de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    expect(pikachu.getPhrase()).to.be.equal('Pika Pika Pikachu');
  });
  it('Se pueden obtener el tipo de los pokemon', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    expect(pikachu.getType()).to.be.equal('Electrico');
  });
  it('Se pueden obtener la efectividad de su ataque', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let squirtle: Pokemon = new Pokemon('Squirtle', 3, 0.6, 'Pistola agua', 'Agua',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Squero squero', 'Agua');

    expect(pikachu.efectivity(squirtle)).to.be.equal(2);
  });
  it('Se pueden obtener el daño que realiza', () => {
    let pikachu: Pokemon = new Pokemon('Pikachu', 0.4, 2, 'Rayo', 'Electrico',
    {HP: 60, attack: 50, defense: 30,speed: 60}, 'Pika Pika Pikachu', 'Electrico');

    let squirtle: Pokemon = new Pokemon('Squirtle', 3, 0.6, 'Pistola agua', 'Agua',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Squero squero', 'Agua');

    expect(pikachu.getDmg(squirtle)).to.be.equal(41);
  });
})