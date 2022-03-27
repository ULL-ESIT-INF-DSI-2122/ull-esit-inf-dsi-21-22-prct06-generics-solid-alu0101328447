import {BasicStreamableCollection} from './StreamCollection'
import {Stream} from './stream'
import {Fecha} from './stream'

export class Serie extends BasicStreamableCollection<Stream> {
  constructor(public series: Stream[]) {
    super(series);
  }

  titleSearch(title: string): Stream[] {
    let result: Stream[] = [];
    for (let i: number = 0; i < this.series.length; i++) {
      if (this.series[i].title == title) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

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

  genreSearch(genre: string): Stream[] {
    let result: Stream[] = [];

    for (let i: number = 0; i < this.series.length; i++) {
      if (this.series[i].genre == genre) {
        result.push(this.series[i]);
      }
    }

    return result;
  }

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