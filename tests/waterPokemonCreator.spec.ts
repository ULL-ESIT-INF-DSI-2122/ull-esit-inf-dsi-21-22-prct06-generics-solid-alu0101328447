import 'mocha';
import {expect} from 'chai';
import {WaterPokemonCreator} from '../src/waterPokemonCreator'

describe('Modificacion 8 - Pe 103: class WaterPokemonCreator test', () => {
  it('Se puede crear un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle instanceof WaterPokemonCreator).to.be.equal(true);
  });
  it('Se puede obtener el ataque de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getAttack()).to.be.equal(49);
  });
  it('Se puede obtener la defensa de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getDeff()).to.be.equal(49);
  });
  it('Se puede obtener la vida de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getHP()).to.be.equal(180);
  });
  it('Se puede obtener la velocidad de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getSpeed()).to.be.equal(45);
  });
  it('Se puede obtener el nombre de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getName()).to.be.equal('Squirtle');
  });
  it('Se puede obtener la altura de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getHeight()).to.be.equal(3);
  });
  it('Se puede obtener el peso de un pokemon de tipo Agua', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().getWeight()).to.be.equal(2);
  });
  it('Se puede obtener el peso de un pokemon de tipo Electrico', () => {
    let squirtle: WaterPokemonCreator = new WaterPokemonCreator('Squirtle', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(squirtle.factoryMethod().type()).to.be.equal('Agua');
  });
});
