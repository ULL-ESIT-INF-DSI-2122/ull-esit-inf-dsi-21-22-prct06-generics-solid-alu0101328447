import { PokemonCreator } from "./pokemonCreator";
import { Pokemon } from "./pokemon";
import { Stats } from "./stats";
import { GrassPokemon } from "./grassPokemon";


/**
 * Clase GrassPokemonCreator
 */
export class GrassPokemonCreator extends PokemonCreator {
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
   * @returns pokemon de tipo planta creado
   */
  public factoryMethod(): Pokemon {
    return new GrassPokemon(this.name, this.weight, this.height, this.stats);
  }
}