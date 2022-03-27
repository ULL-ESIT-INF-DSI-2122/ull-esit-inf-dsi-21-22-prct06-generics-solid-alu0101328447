import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

/**
 * # Clase Documental
 */
export class Documental extends BasicStreamableCollection<Stream> {
  /**
   * 
   * @param documentales 
   */
  constructor(public documentales: Stream[]) {
    super(documentales);
  }

  /**
   * ## titleSearch
   * ### Busca los documentales que tienen el titulo @title
   */
  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.documentales.length; i++) {
      if (this.documentales[i].title == title) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

  /**
   * ## yearSearch
   * ### Busca los documentales realizadoes en @date
   */
  yearSearch(date: Fecha): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.documentales.length; i++) {
      if ((this.documentales[i].date.day == date.day) && (this.documentales[i].date.month == date.month) 
      && (this.documentales[i].date.year == date.year)) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

  /**
   * ## genreSearch
   * ### Busca los documentales del genero @genre
   */
  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.documentales.length; i++) {
      if (this.documentales[i].genre == genre) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

  /**
   * ## directorSearch
   * ### Busca los documentales dirigidos por @director
   */
  directorSearch(director: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.documentales.length; i++) {
      if (this.documentales[i].director == director) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

};