export type Fecha = {
  year: number,
  month: string,
  day: number, 
}

export type Stream = {
  title: string,
  date: Fecha,
  genre: string,
  director: string,
  length: number,
  country: string 
};

export interface StreamableCollect <T> {
  addStreamable(item: T);
  getStreamable(index: number): T | undefined;
  getNumberOfStreamable(): number;
};


export interface Streamable <T> {
  titleSearch(title:string): T[];  
  yearSearch(year: Fecha): T[];
  genreSearch(genre:string): T[];  
  directorSearch(director: string): T[];
};