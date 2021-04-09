import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Appreciation } from 'app/shared/models/appreciation.enum';
import { Stat } from 'app/shared/models/stat';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  @Input()
  public stat : Stat;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener("window:resize")
  callbackClick() {
    console.log("resize window");
  }

  getColorClass() : string {
    let border = "success";

    switch(this.stat.appreciation) {
      case Appreciation.AVERTISSEMENT : 
        border = "warning";
        break;
      case Appreciation.ERREUR : 
        border = "danger";
    }
    return border;
  }
}
