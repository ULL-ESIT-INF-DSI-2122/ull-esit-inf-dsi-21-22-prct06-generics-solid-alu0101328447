
export class ImperialLength {
  constructor(private yarda: number = 0) {
    // Empty method
  };

  getPulgadas(): number {
    return this.yarda * 36;
  };

  setPulgada(pulgada: number) {
    this.yarda = pulgada / 36;
  };

  getPie(): number {
    return this.yarda * 3;
  };

  setPie(pie: number) {
    this.yarda = pie / 3;
  };

  getYarda(): number {
    return this.yarda;
  };

  setYarda(yarda: number) {
    this.yarda = yarda;
  };

  getMilla(): number {
    return this.yarda / 1760 ;
  };

  setMilla(milla: number) {
    this.yarda = milla * 1760;
  };
};
