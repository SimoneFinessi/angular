import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  vet:string[];
  constructor(){
    this.vet=["Escavatore","Gru","Bulldozer","Rullo compressore","Bettoniera","Caricatore","Martello pneumatico","Autobetoniera","Carrello elevatore","Fresatrice stradale"]
  }
}
