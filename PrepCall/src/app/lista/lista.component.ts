import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
list:Foo[]=[]
data:any;
o:Observable<Foo[]>;
constructor(public http:HttpClient){
  this.o=this.http.get<Foo[]>('https://my-json-server.typicode.com/SimoneFinessi/file/db');
  this.o.subscribe(data=>{this.list=data["dati"]})
}

visualizza():void{
  this.o=this.http.get<Foo[]>('https://my-json-server.typicode.com/SimoneFinessi/file/db');
  this.o.subscribe(data=>{this.list=data})
}
}
