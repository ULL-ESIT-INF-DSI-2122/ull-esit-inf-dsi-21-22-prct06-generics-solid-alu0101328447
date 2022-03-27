
# Práctica 6: Clases e interfaces genéricas. Principios SOLID


[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101328447/badge.svg)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101328447)

## Repositorio con el contenido referente a la práctica 6

Esta práctica se encuentra dirigida al uso de clases e interfaces genéricas mediante el uso de los principios SOLID. Para ello, se plantean tres ejercicios que han sido resultos a corde al formato solicitado. A continuación, se procederá a explicar el código desarrollado.


* [Ejercicio 1](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101328447/tree/main/src/ejercicio-01)

Se nos pide realizar el desarrollo de un conjunto de clases que nos permita simular el combate entre personajes de diferentes universos. Para llevar esto a cabo, se requiere de una clase que se encargue del desarrollo del combate `combat.ts`, una clase abstracta que sirva para regular los luchadores de cada universo `fighter.ts` y una clase para cada universo que se desarrollará. Además de esto, también hará falta una pokedex que pueda almacenar a todos los tipos de luchadores, sin importar su universo.

Además, hemos implementado un tipo de dato para regular las estadisticas que vamos a utlilizar en combate: 

```
/**
 * ## Estadisticas básicas de todos los personajes
 */
export type Stats = { 
  HP: number,
  attack: number, 
  defense: number, 
  speed: number,
}
```

Con respecto a la clase `fighter.ts`, le incluiremos todos los datos relevantes y comunes a todos los luchadores. Pese a no mostrarlo, se desarrollan los getters de todos los elementos, ya que, su tipo es privado y nos interesa tener acceso.

```
/**
 * # Clase Fighter
 */
export abstract class Fighter {
  constructor(private name: string, private weight: number, private height: number, 
    private habilityName: string, private habilityType: string, 
    private stats: Stats, private cathPrase: string, private type: string, private universe: string) {
    // Empty method
  }

```

Además, le incluiremos una función que utilizando los datos del peleador pueda calcular la ventaja de tipos, teniendo en cuenta el tipo de ataque y el tipo del luchador que recibe el ataque.

```
  /**
   * ## typeEfectivity
   * ### Calcula la ventaja de tipo tomando el tipo de ataque y el tipo de luchador que recibe el ataque
   * @param fighter Enemigo
   * @returns el multiplicador de tipo
   */
  typeEfectivity(fighter: Fighter): number {
    if (this.habilityType == fighter.getType()) {
      return 0.5;
    } else if (this.habilityType == 'Fuego') {
      switch(fighter.getType()) { 
        case 'Planta' || 'Aire' || 'Armas': 
            return 2; 
            break; 
        case 'Agua' || 'Tierra' || 'Psiquico' : 
            return 0.5; 
            break; 
        case 'Electrico' || 'Magico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Agua') {
      switch(fighter.getType()) { 
        case 'Planta' || 'Tierra' || 'Psiquico': 
            return 0.5; 
            break; 
        case 'Fuego' || 'Aire' || 'Armas' : 
            return 2; 
            break; 
        case 'Electrico' || 'Magico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Aire') {
      switch(fighter.getType()) { 
        case 'Agua' || 'Magico': 
            return 2; 
            break; 
        case 'Fuego' || 'Tierra' || 'Armas' : 
            return 0.5; 
            break; 
        case 'Electrico' || 'Planta' || 'Psiquico':
          return 1;
          break;
        default: 
            return 1; 
            break; 
      } 
    } else if (this.habilityType == 'Tierra') {
      if (fighter.getType() != 'Aire') {
        return 2; 
      } else {
        return 0.5;
      }
    } else if (this.habilityType == 'Electrico') {
      if (fighter.getType() != 'Tierra') {
        return 2; 
      } else {
        return 0.5;
      }
    } else if (this.habilityType == 'Aire') {
      return 2.5;
    } else if (this.habilityType == 'Armas') {
      if ((fighter.getType() == 'Magico') && (this.stats.attack > fighter.getStats().attack)){
        return 5; 
      } else {
        return 2;
      }
    } else if (this.getHabilityType() != 'Normal'){
      return 1.5; // Daño mágico y psiquico
    }

    return 1;
  }
```


Por otra parte, el modelo general de la clase de un universo sigue el siguiente esquema, en el que desciende de la clase luchador. 
A continuación se observa el ejemplo de la clase Marvel:


```
/**
 * # Clase Marvel
 */
export class Marvel extends Fighter {
  /**
   * 
   * @param name 
   * @param weight 
   * @param height 
   * @param habilityName 
   * @param habilityType 
   * @param stats 
   * @param cathPrase 
   * @param type 
   */
  constructor(name: string, weight: number, height: number, habilityName: string, 
    habilityType: string, stats: Stats, cathPrase: string, type: string) {
    super(name, weight, height, habilityName, habilityType, stats, cathPrase, type, 'Marvel');
  }
```

Se incluye una función propia que calcula la efectividad de un ataque teniendo en cuenta el universo de cada personaje y el tipo, a partir de la función `typeEfectivity` que desarrollamos en la clase `Fighter`.

```
  /**
   * ## efectivity
   * ### Calcula la efectividad dependiendo del tipo y el universo del contrario
   * @param fighter Enemigo
   * @returns Multiplicador de tipo
   */
  efectivity(fighter: Fighter): number {
    let result: number = 1;

    switch(fighter.getUniverse()) {
      case 'Pokemon' || 'DC': 
        result *= 2;
        break;
      case 'Star Wars' || 'Dragon Ball': 
        result *= 0.5;
        break;
      default: 
        // En este caso la efectividad no cambia
        break;
    }

    result *= this.typeEfectivity(fighter);

    return result;
  }
```


Finalmente, podemos ver que la clase `Combate` se implemento con dos luchadores y una función de inicio.

```
/**
 * # Clase Combat
 */
export class Combat <T extends (Pokemon | DC | Marvel | StarWars | DragonBall )> {
  constructor(private fighter1: T, private fighter2: T) {
  }

  /**
   * ## Start
   * ### Da inicio al combate y muestra lo que sucede por la terminal
   */
```

La función de inicio toma en cuenta la velocidad de cada personaje para el inicio del combate. Además, de esta manera se comenta todo el combate incluyendo los nombres de la habilidad y la cantidad de daño. Al finalizar el combate, el luchador ganador cerrará con su catch-prase.

```
  start() {
    if (this.fighter1.getStats().speed >= this.fighter2.getStats().speed) {     
      if (this.fighter1.getStats().speed > 75) {
        console.log(`Comienza los ataques ${this.fighter2.getName()} debido a su gran velocidad`);
      } else {
        console.log(`Comienza atacando ${this.fighter2.getName()} debido a que ${this.fighter1.getName()} es mas lento`);
      }
      let attack1: number = this.fighter1.getStats().attack;
      let attack2: number = this.fighter2.getStats().attack;
      let deff1: number = this.fighter1.getStats().defense;
      let deff2: number = this.fighter2.getStats().defense;
    } else  {      
      if (this.fighter1.getStats().speed > 75) {
        console.log(`Comienza los ataques ${this.fighter2.getName()} debido a su gran velocidad`);
      } else {
        console.log(`Comienza atacando ${this.fighter2.getName()} debido a que ${this.fighter1.getName()} es mas lento`);
      }
      let attack1: number = this.fighter2.getStats().attack;
      let attack2: number = this.fighter1.getStats().attack;
      let deff1: number = this.fighter2.getStats().defense;
      let deff2: number = this.fighter1.getStats().defense;
    }

    let turno = 1;

    do {
      console.log(`\n\nTurno ${turno}`);

      let dmg1: number = Math.floor(this.fighter1.getDmg(this.fighter2) * this.fighter1.efectivity(this.fighter2));
      console.log(`${this.fighter1.getName()} ha usado ${this.fighter1.getHabilityName()}`);
      this.fighter2.getStats().HP -= dmg1;
      if (this.fighter2.getStats().HP > 0) {
        console.log(`${this.fighter2.getName()} se quedo a ${this.fighter2.getStats().HP.toFixed(0)}`);
      } else {
        console.log(`${this.fighter2.getName()} ha sido debilitado`);
        console.log(`${this.fighter1.getName()} GANA EL COMBATE!!`);
        console.log(`\n\n${this.fighter1.getPhrase()}`);
      }

      console.log();


      let dmg2: number = Math.floor(this.fighter2.getDmg(this.fighter1) * this.fighter2.efectivity(this.fighter1));
      console.log(`${this.fighter2.getName()}  ha usado ${this.fighter2.getHabilityName()}`);
      this.fighter1.getStats().HP -= dmg2;
      if (this.fighter1.getStats().HP > 0) {
        console.log(`${this.fighter1.getName()} se quedo a ${this.fighter1.getStats().HP.toFixed(0)}`);
      } else {
        console.log(`${this.fighter1.getName()} ha sido debilitado`);
        console.log(`${this.fighter2.getName()} GANA EL COMBATE!!`);
        console.log(`\n\n${this.fighter2.getPhrase()}`);
      }

      turno++;
    } while ((this.fighter1.getStats().HP > 0) && (this.fighter2.getStats().HP > 0));

  }
 ```
 
 La función `combatResult` es una copia de la función `start` en la que no se muestra nada por pantalla y simplemente se devuelve el ganador. Esto fue desarrollado de esta manera para utilizar esta función al momento de hacer los tests.
 
```
  /**
   * ## combat result
   * ### Simula el combate sin mostrar nada por pantalla
   * @returns Ganador del combate
   *
  combatResult(): string {
    if (this.fighter1.getStats().speed >= this.fighter2.getStats().speed) { 
      let attack1: number = this.fighter1.getStats().attack;
      let attack2: number = this.fighter2.getStats().attack;
      let deff1: number = this.fighter1.getStats().defense;
      let deff2: number = this.fighter2.getStats().defense;
    } else  { 
      let attack1: number = this.fighter2.getStats().attack;
      let attack2: number = this.fighter1.getStats().attack;
      let deff1: number = this.fighter2.getStats().defense;
      let deff2: number = this.fighter1.getStats().defense;
    }

    do {

      let dmg1: number = Math.floor(this.fighter1.getDmg(this.fighter2) * this.fighter1.efectivity(this.fighter2));
      this.fighter2.getStats().HP -= dmg1;
      if (this.fighter2.getStats().HP <= 0) {
        return this.fighter1.getName();
      } 


      let dmg2: number = Math.floor(this.fighter2.getDmg(this.fighter1) * this.fighter2.efectivity(this.fighter1));
      this.fighter1.getStats().HP -= dmg2;
      if (this.fighter1.getStats().HP <= 0) {
        return this.fighter2.getName();
      } 

    } while ((this.fighter1.getStats().HP > 0) && (this.fighter2.getStats().HP > 0));

    return '';
  }
```

Tras explicar el código de las clases de combate, se procederá a mostrar el formato de desarrollo de la nueva pokedex: 

```
import { Fighter} from "./fighter";

/**
 * # Clase Pokedex
 */
export class Pokedex <T extends Fighter> {
  /**
   * 
   * @param fighters Conjunto de luchadores
   */
  constructor(public fighters: T[]) {

  }
};
```

* [Ejercicio 2](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101328447/tree/main/src/ejercicio-02)

Este ejercicio consiste en el modelado de datos de una plataforma de vídeo en streaming. Para ello, se requiere de una interfaz que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta, además de implementar métodos de búsqueda. Se incluirá también una clase abstracta que suponga un conjunto de Streams, sin importar el tipo del que sean. Y por último, se necesitarán los tipos de Streams que se organizarán en grupos.


Para comenzar este ejercicio, se desarrollaron los siguientes tipos de datos, ya que era necesario delimitar las condiciones necesarias para un Stream.

```
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
```

Teniendo en cuenta estos datos, creamos las siguientes interfaces. Se divide en dos la interfaza Stream debido a los principios SOLID.

```
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
```


Para llevar a cabo la clase `BasicStreamableCollection`  que es una implementación de la interfaz `StreamableCollect` y `Streamable`. Se añaden las funciones de conjuntos, pero las funciones de búsqueda permanecen abstractas, ya que, todavía no se pueden realizar en esta clase.

```
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
```

Tanto las series, como las películas, como los documentales, siguen el siguiente modelo mostrado como ejemplo. 
Ejemplo de la clase `Pelicula`

```
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
```

En las funciones de busqueda, se recorre la lista de elementos de tipo `Stream` y se comprueba los datos con respecto a los que se nos han introducido. En todas las funciones, el resultado será, aquel conjunto de `Streams` que concuerden con la búsqueda.
 
```
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
```

* [Ejercicio 3](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101328447/tree/main/src/ejercicio-03)

Para lograr resolver este ejercicio se pide la implementación de una clase Cifrado que sea capaz de cifrar y descifrar mensajes utilizando el [Cifrado de Cesar](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar) con desplazamientos variables basados en las letras de una palabra clave.

Por todo esto, la clase `Cifrado` se implementa de la siguiente manera: 


```
/**
 * # Clase Cifrado
 */
export class Cifrado {
  /**
   * 
   * @param message 
   * @param key 
   */
  constructor(private message: string, private key: string) {
  }
```

La función encargada de cifrar el mensaje, utiliza una cadena en la que se encuentran todas las letras del abecedario. Sobre esta cadena se aplica la función `indexOf` con la letra del mensaje correspondiente, para obtener su valor númerico. Esto mismo se hace con la clase y se suman dichos valores, así obteniendo la posición de la letra resultante. Pero para mantener la posición dentro del número de letras del abecedario, se le aplica el módulo 27, que es el número de letras.

```
  /**
   * 
   * @returns mensaje cifrado
   */
  cifrado(): string {
    let result: string = '';
    let y = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    for(let i = 0; i < this.message.length; i++) {
      let aux1: number = y.indexOf(this.message[i].toUpperCase());
      let aux2: number = y.indexOf(this.key[i % this.key.length]);
      result += y[(aux1 + aux2) % 27]
    }
    
    return result;
  }
  ```
  
  Por otra parte, la función de descifrado actúa de la misma manera que la función de cifrado, pero en vez de sumando los valores de la clave, se restan. Por esto mismo, para evitar valores negativos se le suma al resultado de esa resta 27. 
  
```
  /**
   * 
   * @returns mensaje descifrado
   */
  descifrado(): string {
    let result: string = '';
    let y = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    for(let i = 0; i < this.message.length; i++) {
      let aux1: number = y.indexOf(this.message[i].toUpperCase());
      let aux2: number = y.indexOf(this.key[i % this.key.length]);
      let aux3: number = aux1 - aux2;
      while (aux3 < 0) {
        aux3 += 27;
      }
      result += y[(aux3) % 27]
    }
    
    return result;
  }
}
```






