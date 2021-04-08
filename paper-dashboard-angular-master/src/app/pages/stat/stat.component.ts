import { Component, OnInit, Input, HostListener } from '@angular/core';
import Stat from "./Stat"

@Component({
  selector: 'stat-cmp',
  template: `
    <div class="card card-stats">
      <div class="card-body ">
        <div class="row">
          <div class="col-5 col-md-4">
            <div class="icon-big text-center icon-{{ stat.state }}">
              <i class="nc-icon nc-{{ stat.icon }} text-{{ stat.state }}" appDemo></i>
            </div>
          </div>
          <div class="col-7 col-md-8">
            <div class="numbers">
              <p class="card-category">{{ stat.title }}</p>
              <!-- Directive try -->
              <p class="card-title" >
                {{ stat.symbol }} {{ stat.num }}
              <p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <hr>
        <div class="stats">
          <i class="fa fa-refresh"></i> {{ stat.lastRefresh || 'Update now' }}
        </div>
      </div>
    </div>
  `
})
export class StatComponent implements OnInit {
  @Input() public stat: Stat;
  constructor() {};

  ngOnInit(): void {}

  @HostListener('click')
  callback() {
    console.log(this.stat.title);
  }
}
