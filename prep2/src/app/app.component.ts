import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 array=new Array<string>();
 end:string
 macchina(color:HTMLInputElement,port:HTMLInputElement,camb:HTMLInputElement): boolean{
  this.end="Colore "+color.value+","+port.value+" porte,cambio "+ camb.value
  this.array.push(this.end)
  for ( let i of this.array) {
    console.log(i)
   }
  return false
 }
}
