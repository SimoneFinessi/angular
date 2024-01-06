import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
vet:string[];
constructor(){
  this.vet=["Escavatore","Gru","Bulldozer","Rullo compressore","Bettoniera","Caricatore","Martello pneumatico","Autobetoniera","Carrello elevatore","Fresatrice stradale"]
}
}
