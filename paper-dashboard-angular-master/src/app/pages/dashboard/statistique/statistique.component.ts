import { Component, OnInit } from '@angular/core';
import { Stat } from 'app/shared/models/stat';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  public stat = new Stat("Capacity", "250 GB", "globe", "warning");
  
  constructor() { }

  ngOnInit(): void {
  }

}
