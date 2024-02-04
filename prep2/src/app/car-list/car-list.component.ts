import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
@Input() valore=new Array<string>();
@Input() end:string


}
