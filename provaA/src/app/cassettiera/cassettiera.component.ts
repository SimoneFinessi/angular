import { Component } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent {
nomi:string[];
constructor(){
  this.nomi=["pino","mino","nino","gino","simo","andre","pippo","gian","marco","ale"];
}
}
