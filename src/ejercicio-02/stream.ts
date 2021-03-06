export type Fecha = {
  year: number,
  month: number,
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

/**
 * ## Interfaz de Streams
 * ### Funciones para almacenaje
 */
export interface StreamableCollect <T> {
  addStreamable(item: T);
  getStreamable(index: number): T | undefined;
  getNumberOfStreamable(): number;
};

/**
 * ## Interfaz de Streams
 * ### Funciones de busqueda
 */
export interface Streamable <T> {
  titleSearch(title:string): T[];  
  yearSearch(year: Fecha): T[];
  genreSearch(genre:string): T[];  
  directorSearch(director: string): T[];
};