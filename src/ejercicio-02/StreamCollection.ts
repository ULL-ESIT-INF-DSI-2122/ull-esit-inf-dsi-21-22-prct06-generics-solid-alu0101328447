import {Streamable} from './stream'
import {Stream} from './stream'
import {Fecha} from './stream'
import {StreamableCollect} from './stream'
import {Serie} from './serie'
import {Pelicula} from './pelicula'
import {Documental} from './documental'

export abstract class BasicStreamableCollection <T> implements StreamableCollect<T>, Streamable<T> {
  constructor(private items: T[]) {
  }

  public addStreamable(item: T) {
    this.items.push(item);
  }

  public getStreamable(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  public getNumberOfStreamable(): number {
    return this.items.length;
  }

  abstract titleSearch(title: string): T[];

  abstract yearSearch(year: Fecha): T[];

  abstract genreSearch(genre: string): T[];

  abstract directorSearch(director: string): T[];
}