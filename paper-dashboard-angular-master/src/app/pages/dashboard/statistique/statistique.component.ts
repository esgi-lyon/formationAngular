import { Component, Input, OnInit } from '@angular/core';
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

}
