import 'mocha';
import {expect} from 'chai';
import {ElectricPokemonCreator} from '../src/electricPokemonCreator'

describe('Modificacion 8 - Pe 103: class ElectricPokemonCreator test', () => {
  it('Se puede crear un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu instanceof ElectricPokemonCreator).to.be.equal(true);
  });
  it('Se puede obtener el ataque de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getAttack()).to.be.equal(49);
  });
  it('Se puede obtener la defensa de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getDeff()).to.be.equal(49);
  });
  it('Se puede obtener la vida de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getHP()).to.be.equal(180);
  });
  it('Se puede obtener la velocidad de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getSpeed()).to.be.equal(45);
  });
  it('Se puede obtener el nombre de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getName()).to.be.equal('Pickachu');
  });
  it('Se puede obtener la altura de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getHeight()).to.be.equal(3);
  });
  it('Se puede obtener el peso de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().getWeight()).to.be.equal(2);
  });
  it('Se puede obtener el peso de un pokemon de tipo Electrico', () => {
    let pickachu: ElectricPokemonCreator = new ElectricPokemonCreator('Pickachu', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(pickachu.factoryMethod().type()).to.be.equal('Electrico');
  });
});