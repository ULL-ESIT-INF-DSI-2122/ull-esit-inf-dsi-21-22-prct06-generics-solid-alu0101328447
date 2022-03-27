import {Streamable} from './stream'
import {Stream} from './stream'
import {Fecha} from './stream'
import {StreamableCollect} from './stream'
import {Serie} from './serie'
import {Pelicula} from './pelicula'
import {Documental} from './documental'

/**
 * # Clase BasicStreamableCollection
 */
export abstract class BasicStreamableCollection <T> implements StreamableCollect<T>, Streamable<T> {
  /**
   * 
   * @param items 
   */
  constructor(private items: T[]) {
  }

  /**
   * 
   * @param item Stream
   */
  public addStreamable(item: T) {
    this.items.push(item);
  }

  /**
   * @param index posicion del stream
   */
  public getStreamable(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  /**
   * 
   * @returns numero de streams
   */
  public getNumberOfStreamable(): number {
    return this.items.length;
  }

  /**
   * 
   * @param title 
   */
  abstract titleSearch(title: string): T[];

  /**
   * 
   * @param year 
   */
  abstract yearSearch(year: Fecha): T[];

  /**
   * 
   * @param genre 
   */
  abstract genreSearch(genre: string): T[];

  /**
   * 
   * @param director 
   */
  abstract directorSearch(director: string): T[];
}