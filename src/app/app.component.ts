import { Komunikat } from './komunikat';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Mateusz';

  komunikaty:string[];
  pokazKomunikaty = true;
  

  ngOnInit() {
this.komunikaty = [
  new Komunikat('Treść pierwszego komunikatu', new Date(), true),
  new Komunikat('Treść drugiego komunikatu', new Date(), true),
  new Komunikat('Treść trzeciego komunikatu', new Date(), false),
];
  }
}