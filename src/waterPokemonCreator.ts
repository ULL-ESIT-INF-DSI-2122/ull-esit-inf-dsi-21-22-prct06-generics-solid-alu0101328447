import { PokemonCreator } from "./pokemonCreator";
import { Pokemon } from "./pokemon";
import { Stats } from "./stats";
import { WaterPokemon } from "./waterPokemon";


/**
 * Clase WaterPokemonCreator
 */
export class WaterPokemonCreator extends PokemonCreator {
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
   * @returns pokemon de tipo agua creado
   */
  public factoryMethod(): Pokemon {
    return new WaterPokemon(this.name, this.weight, this.height, this.stats);
  }
}