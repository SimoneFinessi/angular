import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  obsP: Observable<any>;
  fooData : Foo[];
  oFoo : Observable<Foo[]>;
  constructor(public http: HttpClient) { }
  makeRequest(): void {
    this.loading = true;
    this.o = this.http.get("https://jsonplaceholder.typicode.com/posts/42");
    this.o.subscribe(this.getData);
  }
  getData = (d: object) => {
    this.data = d;
    this.loading = false;
  }

  makeCompactPost(): void {
    this.loading = true;

    this.obsP = this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({ body: 'bar', title: 'foo', userId: 1 }))

    this.obsP.subscribe(this.getdatapost)
  }
  getdatapost = data => {
    this.data = data;
    this.loading = false;
  }

  makeTypedRequest() : void
 {
   //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
   this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
   this.oFoo.subscribe(data => {this.fooData = data;});
 }

}
