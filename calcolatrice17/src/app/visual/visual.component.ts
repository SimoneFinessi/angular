import { Component,Input, input } from '@angular/core';

@Component({
  selector: 'app-visual',
  standalone: true,
  imports: [],
  templateUrl: './visual.component.html',
  styleUrl: './visual.component.css'
})
export class VisualComponent {
@Input() vedere:number[]=[]
}
