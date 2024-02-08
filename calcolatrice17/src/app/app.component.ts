import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualComponent } from './visual/visual.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VisualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ris:number[]=[]
  calcola(num1:HTMLInputElement,num2:HTMLInputElement,cosa:HTMLInputElement): boolean{
    let x=Number(num1.value)
    let y=Number(num2.value)
    let z=Number(cosa.value)
    let m=0
    switch(z){
      case 1: {
      m=x+y
      break
     }
     case 2:{
      m=x-y
      break
     }
     case 3:{
      m=x*y
      break
     }
    }
    this.ris.push(m)
    return false
  }
}
