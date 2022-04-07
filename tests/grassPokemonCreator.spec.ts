import 'mocha';
import {expect} from 'chai';
import {GrassPokemonCreator} from '../src/grassPokemonCreator'

describe('Modificacion 8 - Pe 103: class GrassPokemonCreator test', () => {
  it('Se puede crear un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur instanceof GrassPokemonCreator).to.be.equal(true);
  });
  it('Se puede obtener el ataque de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getAttack()).to.be.equal(49);
  });
  it('Se puede obtener la defensa de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getDeff()).to.be.equal(49);
  });
  it('Se puede obtener la vida de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getHP()).to.be.equal(180);
  });
  it('Se puede obtener la velocidad de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getSpeed()).to.be.equal(45);
  });
  it('Se puede obtener el nombre de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getName()).to.be.equal('Bulbasur');
  });
  it('Se puede obtener la altura de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getHeight()).to.be.equal(3);
  });
  it('Se puede obtener el peso de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().getWeight()).to.be.equal(2);
  });
  it('Se puede obtener el peso de un pokemon de tipo Planta', () => {
    let bulbasur: GrassPokemonCreator = new GrassPokemonCreator('Bulbasur', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(bulbasur.factoryMethod().type()).to.be.equal('Planta');
  });
});