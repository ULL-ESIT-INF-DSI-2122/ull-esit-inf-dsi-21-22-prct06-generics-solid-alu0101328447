
export class ImperialLength {
  constructor(private yarda: number = 0) {
    // Empty method
  };

  getPulgadas(): number {
    return this.yarda * 36;
  };

  setPulgadas(pulgada: number) {
    this.yarda = pulgada / 36;
  };

  getPies(): number {
    return this.yarda * 3;
  };

  setPies(pie: number) {
    this.yarda = pie / 3;
  };

  getYardas(): number {
    return this.yarda;
  };

  setYardas(yarda: number) {
    this.yarda = yarda;
  };

  getMillas(): number {
    return this.yarda / 1760 ;
  };

  setMillas(milla: number) {
    this.yarda = milla * 1760;
  };
};
