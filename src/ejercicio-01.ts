
export interface Arithmeticable<T> {
    add(newItem: T): T;
    substract(newItem: T): T;
    multiply(newItem: T): T;
    divide(newItem: T): T;
}

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    constructor(private items: T[]) {
        // Empty method
    }

    addArithmeticable(newItem: T) {
        this.items.push(newItem);
    }

    getArithmeticable(index: number) {
        return this.items[index];
    }

    getNumberOfArithmeticables() {
        return this.items.length;
    }
};


export class Complex implements Arithmeticable<Complex> {
    constructor(public real: number, public imaginary: number) {
    }
  
    add(newItem: Complex): Complex {
        return new Complex(this.real + newItem. real, this.imaginary + newItem.imaginary);
    }

    substract(newItem: Complex): Complex {
        return new Complex(this.real - newItem. real, this.imaginary - newItem.imaginary);
    }

    multiply(newItem: Complex): Complex {
        let aux1: number = this.real * newItem.real;
        let aux2: number = this.imaginary * newItem.imaginary;
        let aux3: number = this.real * newItem.imaginary;
        let aux4: number = this.imaginary * newItem.real;
        
        return new Complex(aux1 - aux2, aux3 + aux4);
    }

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

export class Rational implements Arithmeticable<Rational> {
    constructor(public num: number, public den: number) {
    }
  
    add(newItem: Rational): Rational {
        let aux: number = this.den * newItem.den;
        return new Rational(this.num * newItem.den + newItem.num * this.den, aux);
    }

    substract(newItem: Rational): Rational {
        let aux: number = this.den * newItem.den;
        return new Rational(this.num * newItem.den - newItem.num * this.den, aux);
    }

    multiply(newItem: Rational): Rational {
        return new Rational(this.num * newItem.num, this.den * newItem.den);
    }

    divide(newItem: Rational): Rational {
        return new Rational(this.num * newItem.den, this.den * newItem.num);
    }
};


let c1: Complex = new Complex(5, 4);
let c2: Complex = new Complex(8, 1);

let r1: Rational = new Rational(4, 1);
let r2: Rational = new Rational(9, 3);

let x: ArithmeticableCollection<Complex> = new ArithmeticableCollection([c1, c2,]);
let y: ArithmeticableCollection<Rational> = new ArithmeticableCollection([r1, r2,]);