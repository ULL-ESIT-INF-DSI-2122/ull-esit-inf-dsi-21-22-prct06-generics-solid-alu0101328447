import { PokemonCreator } from "./pokemonCreator";
import { Pokemon } from "./pokemon";
import { Stats } from "./stats";
import { FirePokemon } from "./firePokemon";


/**
 * Clase FirePokemonCreator
 */
export class FirePokemonCreator extends PokemonCreator {
  /**
   * 
   * @param name 
   * @param weight 
   * @param height 
   * @param stats 
   */
  constructor(private name: string, private weight: number, 
    private height: number, private stats: Stats) {
    super();
  }

  /**
   * 
   * @returns pokemon de fuego creado
   */
  public factoryMethod(): Pokemon {
    return new FirePokemon(this.name, this.weight, this.height, this.stats);
  }
}