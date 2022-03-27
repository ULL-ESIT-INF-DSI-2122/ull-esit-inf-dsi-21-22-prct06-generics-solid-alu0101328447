
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

