import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  standalone: true,
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
 @Input() mac:string;
 pezzi:string[];
 constructor(){
   this.pezzi=["bulloni", "viti", "ferro"];
  }
}
