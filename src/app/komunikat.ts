export class Komunikat {
  tresc: string;
  dataDodania: Date;
  wazny: boolean;

  constructor(tresc: string, dataDodania: Date, wazny: boolean) {
    this.tresc = tresc;
    this.dataDodania = dataDodania;
    this.wazny = wazny;
  }
}