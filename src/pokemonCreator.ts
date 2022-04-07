import { Pokemon } from "./pokemon";
import { Stats } from "./stats";

/**
 * Clase abstracta PokemonCreator
 */
export abstract class PokemonCreator {
  /**
   * Funcion que devuelve el pokemon creado
   */
  public abstract factoryMethod(): Pokemon;
  
  
  /**
   * Logic that relies on TwoDimensionalFigure objects returned by
   * the factory method. Subclasses can change this logic indirectly
   * by overriding the factory method and returning a different
   * TwoDimensionalFigure object.
   */
  public logic(): string {
    const Pokemon = this.factoryMethod();
    return `Soy ${Pokemon.getName()}`;
  }


  /*
   * 
   * @param pokemon 
   * @returns daño del ataque de un pokemon a otro pokemon
   *
  public pokeAttack(pokemon: Pokemon): number {
    const myPokemon = this.factoryMethod();
    return (50 * (myPokemon.getAttack() / pokemon.getDeff()) * Number(myPokemon.pokeEffectivity(pokemon.type())));
  }*/

}
