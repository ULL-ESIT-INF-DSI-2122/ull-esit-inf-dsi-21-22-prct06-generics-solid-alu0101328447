import 'mocha';
import {expect} from 'chai';
import {PokemonCreator} from '../src/pokemonCreator'
import {FirePokemonCreator} from '../src/firePokemonCreator'

describe('Modificacion 8 - Pe 103: class PokemonCreator test', () => {
  it('Se puede usar la funcion logic', () => {
    let charmander: FirePokemonCreator = new FirePokemonCreator('Charmander', 2, 3, 
    {HP: 180, attack: 49, defense: 49, speed: 45})
    expect(charmander.logic()).to.be.equal('Soy Charmander');
  });
});