import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallHttp';
  citofono! :Observable<any>;
  myData_Save:any={};
  constructor(private http:HttpClient){
    
    this.citofono=this.http.get("https://jsonplaceholder.typicode.com/posts/42");
    this.citofono.subscribe(this.faiQualcosa)
  }
  faiQualcosa=(myData:any)=>{
    this.myData_Save=myData;
  }
}
