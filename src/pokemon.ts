/**
 * Interfaz de Pokemon
 */
export interface Pokemon {
  getName(): string;
  getWeight(): number;
  getHeight(): number;
  getAttack(): number;
  getDeff(): number;
  getHP(): number;
  getSpeed(): number;
  type(): string;
  //pokeEffectivity(type: string): number;
}





