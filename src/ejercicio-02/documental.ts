import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

export class Documental extends BasicStreamableCollection<Stream> {
  constructor(public documentales: Stream[]) {
    super(documentales);
  }

  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.documentales.length; i++) {
      if (this.documentales[i].title == title) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

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

  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.documentales.length; i++) {
      if (this.documentales[i].genre == genre) {
        result.push(this.documentales[i]);
      }
    }

    return result;
  }

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