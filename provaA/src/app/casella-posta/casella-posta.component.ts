import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent {
@Input() nom:string;
vet:string[]
constructor(){
this.vet=["lettera1","lettera2","lettera3"]
}
}
