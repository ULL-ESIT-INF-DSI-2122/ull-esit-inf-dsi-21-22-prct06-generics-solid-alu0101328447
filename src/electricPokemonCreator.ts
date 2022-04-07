import { PokemonCreator } from "./pokemonCreator";
import { Pokemon } from "./pokemon";
import { Stats } from "./stats";
import { ElectricPokemon } from "./electricPokemon";

/**
 * # Clase ElectricPokemonCreator
 */
export class ElectricPokemonCreator extends PokemonCreator {
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
   * @return Pokemon Electrico creado
   */
  public factoryMethod(): Pokemon {
    return new ElectricPokemon(this.name, this.weight, this.height, this.stats);
  }
}