import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { FruitsComponent } from './fruits/fruits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericComponentComponent } from './generic-component/generic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    FruitsComponent,
    GenericComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
