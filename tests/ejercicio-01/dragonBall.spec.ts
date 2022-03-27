import 'mocha';
import {expect} from 'chai';
import {DragonBall} from '../../src/ejercicio-01/dragonBall'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: class Dragon Ball test', () => {
  it('Se pueden obtener el nombre de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');
    expect(bu.getName()).to.be.equal('Bu');
  });
  it('Se pueden obtener el nombre de la habilidad de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');
    expect(bu.getHabilityName()).to.be.equal('Rayo - Bu');
  });
  it('Se pueden obtener el tipo de la habilidad de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');
    expect(bu.getHabilityType()).to.be.equal('Magia');
  });
  it('Se pueden obtener la altura de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    expect(bu.getHeight()).to.be.equal(1.8);
  });
  it('Se pueden obtener el peso de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    expect(bu.getWeigth()).to.be.equal(88);
  });
  it('Se pueden obtener la frase tipica de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    expect(bu.getPhrase()).to.be.equal('Bu tiene hambre!!');
  });
  it('Se pueden obtener el tipo de los personajes de Dragon Ball', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    expect(bu.getType()).to.be.equal('Magia');
  });
  it('Se pueden obtener la efectividad de su ataque', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    let piccolo: DragonBall = new DragonBall('Piccolo', 70, 1.9, 'Makankosappo', 'Magia',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Soy verde y buen padre', 'Magia');

    expect(bu.efectivity(piccolo)).to.be.equal(0.5);
  });
  it('Se pueden obtener el daño que realiza', () => {
    let bu: DragonBall = new DragonBall('Bu', 88, 1.80, 'Rayo - Bu', 'Magia',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Bu tiene hambre!!', 'Magia');

    let piccolo: DragonBall = new DragonBall('Piccolo', 70, 1.9, 'Makankosappo', 'Magia',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Soy verde y buen padre', 'Magia');

    expect(bu.getDmg(piccolo)).to.be.equal(75);
  });
})