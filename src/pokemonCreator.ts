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
