import { Component, Input } from '@angular/core';
import { Foo } from '../foo.model';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent {
@Input() mostra:Foo;

}
