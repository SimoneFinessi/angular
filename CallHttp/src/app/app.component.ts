import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;
  loading: boolean;
  o :Observable<Object>;
  constructor(public http:HttpClient){}
  makeRequest(): void{
    this.loading=true;
    this.o=this.http.get("https://jsonplaceholder.typicode.com/posts/42");
    this.o.subscribe(this.getData);
  }
  getData=(d:object)=>{
    this.data=d;
    this.loading=false;
  }
}
