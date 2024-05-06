import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vis:boolean=false;
  list:Foo[]=[]
  data:any;
  dataP:any;
  o:Observable<Foo[]>;
  out:Foo;
  obsP:Observable<Foo>;
  constructor(public http:HttpClient){
    this.o=this.http.get<Foo[]>('https://my-json-server.typicode.com/SimoneFinessi/file/db');
    this.o.subscribe(data=>{this.list=data["dati"]})
  }

  visual(x:Foo):void{
    this.out=x;
  this.vis=true;
  }
  submitForm(Nome:HTMLInputElement,Congome:HTMLInputElement,Indirizzo:HTMLInputElement,Telefono:HTMLInputElement,Email:HTMLInputElement,DataPrenotazione:HTMLInputElement,OraPrenotazione:HTMLInputElement):void{

    this.obsP = this.http.post<Foo>('https://jsonplaceholder.typicode.com/posts', JSON.stringify({ Nome:Nome.value, Cognome:Congome.value,Indirizzo:Indirizzo.value,Telefono:Telefono.value, Email:Email.value, DataPrenotazione:DataPrenotazione.value, OraPrenotazione:OraPrenotazione.value}))
    this.obsP.subscribe(getdatapost=>{this.dataP=getdatapost
      if (this.dataP != undefined){
        this.list.push(new Foo(Nome.value, Congome.value,Indirizzo.value,Telefono.value, Email.value, DataPrenotazione.value, OraPrenotazione.value))
      }
    })
  }
}
