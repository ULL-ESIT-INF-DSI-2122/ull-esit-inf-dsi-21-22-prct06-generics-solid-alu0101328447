
/**
 * # Interfaz generica Arithmeticable
 */
export interface Arithmeticable<T> {
    /**
     * ## Add 
     * ### Función de suma
     * @param newItem 
     */
    add(newItem: T): T;   

    /**
    * ## Substract 
    * ### Función de resta
    * @param newItem 
    */
    substract(newItem: T): T;

    /**
    * ## Multiply 
    * ### Función de multiplicación
    * @param newItem 
    */
    multiply(newItem: T): T;

    /**
    * ## Divide 
    * ### Función de division
    * @param newItem 
    */
    divide(newItem: T): T;
}

/**
 * # Clase ArithmeticableCollection
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    /**
     * ### Conjunto de elementos Arithmeticable
     * @param items 
     */
    constructor(private items: T[]) {
        // Empty method
    }

    /**
     * ## addArithmeticable
     * ### Añade un aritmetico a la clase
     * @param newItem 
     */
    addArithmeticable(newItem: T) {
        this.items.push(newItem);
    }

    /**
     * ## getArithmeticable
     * ### Devuelve el aritmetico en esa posicion
     * @param newItem 
     */
    getArithmeticable(index: number) {
        return this.items[index];
    }

    /**
     * ## getNumberOfArithmeticables
     * ### Devuelve el numero de elementos de la clase
     * @param newItem 
     */    
    getNumberOfArithmeticables() {
        return this.items.length;
    }
};


/**
 * # Clase de numeros complejos
 */
export class Complex implements Arithmeticable<Complex> {
    constructor(public real: number, public imaginary: number) {
    }
  
    /**
     * ## Add 
     * @param newItem 
     * @returns 
     */
    add(newItem: Complex): Complex {
        return new Complex(this.real + newItem. real, this.imaginary + newItem.imaginary);
    }

    /**
     * ## Substract 
     * @param newItem 
     * @returns 
     */
    substract(newItem: Complex): Complex {
        return new Complex(this.real - newItem. real, this.imaginary - newItem.imaginary);
    }

    /**
     * ## Multiply
     * @param newItem 
     * @returns 
     */
    multiply(newItem: Complex): Complex {
        let aux1: number = this.real * newItem.real;
        let aux2: number = this.imaginary * newItem.imaginary;
        let aux3: number = this.real * newItem.imaginary;
        let aux4: number = this.imaginary * newItem.real;
        
        return new Complex(aux1 - aux2, aux3 + aux4);
    }

    /**
     * ## Divide
     * @param newItem 
     * @returns 
     */
    divide(newItem: Complex): Complex {
        let aux1: number = this.real * newItem.real;
        let aux2: number = this.imaginary * newItem.imaginary;
        let aux3: number = this.real * newItem.imaginary;
        let aux4: number = this.imaginary * newItem.real;

        let aux5: number = (aux1 + aux2) / (Math.pow(newItem.real, 2) + Math.pow(newItem.imaginary, 2));
        let aux6: number = (aux3 - aux4) / (Math.pow(newItem.real, 2) + Math.pow(newItem.imaginary, 2));

        return new Complex(aux5, aux6);
    }
};

/**
 * # Clase de numeros racionales
 */
export class Rational implements Arithmeticable<Rational> {
    constructor(public num: number, public den: number) {
    }
  
    /**
     * ## Add 
     * @param newItem 
     * @returns 
     */
    add(newItem: Rational): Rational {
        let aux: number = this.den * newItem.den;
        return new Rational(this.num * newItem.den + newItem.num * this.den, aux);
    }

    /**
     * ## Substract
     * @param newItem 
     * @returns 
     */
    substract(newItem: Rational): Rational {
        let aux: number = this.den * newItem.den;
        return new Rational(this.num * newItem.den - newItem.num * this.den, aux);
    }

    /**
     * ## Multiply
     * @param newItem 
     * @returns 
     */
    multiply(newItem: Rational): Rational {
        return new Rational(this.num * newItem.num, this.den * newItem.den);
    }

    /**
     * # Divide
     * @param newItem 
     * @returns 
     */
    divide(newItem: Rational): Rational {
        return new Rational(this.num * newItem.den, this.den * newItem.num);
    }
};

