import 'mocha';
import {expect} from 'chai';
import {FirePokemonCreator} from '../src/firePokemonCreator'

describe('Modificacion 8 - Pe 103: class FirePokemonCreator test', () => {
  it('Se puede crear un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander instanceof FirePokemonCreator).to.be.equal(true);
  });
  it('Se puede obtener el ataque de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getAttack()).to.be.equal(49);
  });
  it('Se puede obtener la defensa de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getDeff()).to.be.equal(49);
  });
  it('Se puede obtener la vida de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getHP()).to.be.equal(180);
  });
  it('Se puede obtener la velocidad de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getSpeed()).to.be.equal(45);
  });
  it('Se puede obtener el nombre de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getName()).to.be.equal('Charmander');
  });
  it('Se puede obtener la altura de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getHeight()).to.be.equal(3);
  });
  it('Se puede obtener el peso de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().getWeight()).to.be.equal(2);
  });
  it('Se puede obtener el peso de un pokemon de tipo Fuego', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.factoryMethod().type()).to.be.equal('Fuego');
  });
});