import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

/**
 * # Clase Pelicula
 */
export class Pelicula extends BasicStreamableCollection<Stream> {
  /**
   * 
   * @param peliculas 
   */
  constructor(public peliculas: Stream[]) {
    super(peliculas);
  }

  /**
   * ## titleSearch
   * ### Busca las peliculas que tienen el titulo @title
   */
  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].title == title) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

  /**
   * ## yearSearch
   * ### Busca las peliculas realizadoes en @date
   */
  yearSearch(date: Fecha): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.peliculas.length; i++) {
      if ((this.peliculas[i].date.day == date.day) && (this.peliculas[i].date.month == date.month) 
      && (this.peliculas[i].date.year == date.year)) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

  /**
   * ## genreSearch
   * ### Busca las peliculas del genero @genre
   */
  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].genre == genre) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

  /**
   * ## directorSearch
   * ### Busca las peliculas dirigidos por @director
   */
  directorSearch(director: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].director == director) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

};