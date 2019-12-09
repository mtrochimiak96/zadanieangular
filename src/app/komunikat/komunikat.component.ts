import { Komunikat } from '../komunikat';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-komunikat',
  templateUrl: './komunikat.component.html',
  styleUrls: ['./komunikat.component.css']
})
export class KomunikatComponent{

@Input() hey: Komunikat[];

}