import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio-01/marvel'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: class Marvel test', () => {
  it('Se pueden obtener el nombre de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');
    expect(wanda.getName()).to.be.equal('Wanda');
  });
  it('Se pueden obtener el nombre de la habilidad de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');
    expect(wanda.getHabilityName()).to.be.equal('Control Mental');
  });
  it('Se pueden obtener el tipo de la habilidad de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');
    expect(wanda.getHabilityType()).to.be.equal('Psiquico');
  });
  it('Se pueden obtener la altura de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    expect(wanda.getHeight()).to.be.equal(1.7);
  });
  it('Se pueden obtener el peso de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    expect(wanda.getWeigth()).to.be.equal(67);
  });
  it('Se pueden obtener la frase tipica de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    expect(wanda.getPhrase()).to.be.equal('Wanda tiene hambre!!');
  });
  it('Se pueden obtener el tipo de los personajes de Marvel', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    expect(wanda.getType()).to.be.equal('Psiquico');
  });
  it('Se pueden obtener la efectividad de su ataque', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.77, 'Batarang', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Normal');

    let spiderman: Marvel = new Marvel('Spiderman', 70, 1.9, 'Telarañas', 'Armas',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Soy tu vecino y amigo spiderman', 'Normal');

    expect(wanda.efectivity(spiderman)).to.be.equal(1.5);
  });
  it('Se pueden obtener el daño que realiza', () => {
    let wanda: Marvel = new Marvel('Wanda', 67, 1.70, 'Control Mental', 'Psiquico',
    {HP: 60, attack: 100, defense: 20,speed: 20}, 'Wanda tiene hambre!!', 'Psiquico');

    let spiderman: Marvel = new Marvel('Spiderman', 70, 1.9, 'Telarañas', 'Armas',
    {HP: 70, attack: 60, defense: 60,speed: 55}, 'Soy tu vecino y amigo spiderman', 'Normal');

    expect(wanda.getDmg(spiderman)).to.be.equal(83);
  });
})