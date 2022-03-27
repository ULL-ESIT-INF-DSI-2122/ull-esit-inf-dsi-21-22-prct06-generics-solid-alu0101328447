import 'mocha';
import {expect} from 'chai';
import {StarWars} from '../../src/ejercicio-01/starWars'
import {Stats} from '../../src/ejercicio-01/stats'

describe('Ejercicio-01: class Star Wars test', () => {
  it('Se pueden obtener el nombre de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');
    expect(clon.getName()).to.be.equal('Clon');
  });
  it('Se pueden obtener el nombre de la habilidad de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');
    expect(clon.getHabilityName()).to.be.equal('Disparo');
  });
  it('Se pueden obtener el tipo de la habilidad de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');
    expect(clon.getHabilityType()).to.be.equal('Armas');
  });
  it('Se pueden obtener la altura de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    expect(clon.getHeight()).to.be.equal(1.8);
  });
  it('Se pueden obtener el peso de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    expect(clon.getWeigth()).to.be.equal(88);
  });
  it('Se pueden obtener la frase tipica de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    expect(clon.getPhrase()).to.be.equal('Sirvo a Darth Vader');
  });
  it('Se pueden obtener el tipo de los personajes de Star Wars', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    expect(clon.getType()).to.be.equal('Armas');
  });
  it('Se pueden obtener la efectividad de su ataque', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    let darthVader: StarWars = new StarWars('Darth Vader', 90, 1.9, 'Fuerza', 'Psiquico',
    {HP: 100, attack: 75, defense: 100,speed: 35}, 'Yo puedo que sea tu padre', 'Psiquico');

    expect(clon.efectivity(darthVader)).to.be.equal(2);
  });
  it('Se pueden obtener el daño que realiza', () => {
    let clon: StarWars = new StarWars('Clon', 88, 1.80, 'Disparo', 'Armas',
    {HP: 120, attack: 90, defense: 20,speed: 20}, 'Sirvo a Darth Vader', 'Armas');

    let darthVader: StarWars = new StarWars('Darth Vader', 90, 1.9, 'Fuerza', 'Psiquico',
    {HP: 100, attack: 75, defense: 100,speed: 35}, 'Yo puedo que sea tu padre', 'Psiquico');

    expect(clon.getDmg(darthVader)).to.be.equal(45);
  });
})