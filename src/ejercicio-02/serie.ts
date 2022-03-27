import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

/**
 * # Clase Serie
 */
export class Serie extends BasicStreamableCollection<Stream> {
  /**
   * 
   * @param series 
   */
  constructor(public series: Stream[]) {
    super(series);
  }

  /**
   * ## titleSearch
   * ### Busca las series que tienen el titulo @title
   */
  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.series.length; i++) {
      if (this.series[i].title == title) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

  /**
   * ## yearSearch
   * ### Busca las series realizadoes en @date
   */
  yearSearch(date: Fecha): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.series.length; i++) {
      if ((this.series[i].date.day == date.day) && (this.series[i].date.month == date.month) 
      && (this.series[i].date.year == date.year)) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

  /**
   * ## genreSearch
   * ### Busca las series del genero @genre
   */
  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.series.length; i++) {
      if (this.series[i].genre == genre) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

  /**
   * ## directorSearch
   * ### Busca las series dirigidos por @director
   */
  directorSearch(director: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.series.length; i++) {
      if (this.series[i].director == director) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

};