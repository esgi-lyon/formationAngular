import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
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

  getBorderClass() : string {
    return "border-" + this.stat.appreciation;
  }
}
