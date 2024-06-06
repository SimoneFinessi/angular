import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ANIMALS, Emoji, FRUITS } from '../emoji.module';

@Component({
  selector: 'app-generic-component',
  templateUrl: './generic-component.component.html',
  styleUrls: ['./generic-component.component.css']
})
export class GenericComponentComponent {
  genVect : Emoji[]= [{name:"", emoji:""}];
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      if (uri_param == 'fruits') this.genVect = FRUITS;
      if (uri_param == 'animals') this.genVect = ANIMALS;
  
    }
  
}
