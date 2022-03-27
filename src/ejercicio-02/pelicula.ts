import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

export class Pelicula extends BasicStreamableCollection<Stream> {
  constructor(public peliculas: Stream[]) {
    super(peliculas);
  }

  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].title == title) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

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

  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].genre == genre) {
        result.push(this.peliculas[i]);
      }
    }

    return result;
  }

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