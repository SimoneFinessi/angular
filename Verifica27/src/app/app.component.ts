import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Verifica27';
  mostra(nome:HTMLInputElement,lettiS:HTMLInputElement,lettiD:HTMLInputElement,id:HTMLInputElement):void{
    console.log(nome.value,lettiS.value,lettiD.value,id.value)
  }
}
