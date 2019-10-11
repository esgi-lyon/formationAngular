import { Component } from '@angular/core';
import { Tableau } from './tableau';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tableaux: Tableau[];
  title: string = "TP Angular";
}
