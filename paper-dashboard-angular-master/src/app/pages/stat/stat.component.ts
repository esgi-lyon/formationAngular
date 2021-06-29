import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';
import Stat from "./Stat"

@Component({
  selector: 'stat-cmp',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <div class="card card-stats" [appAccentHover]="stat.appreciation | stateToColor:true:'info'">
      <div class="card-body ">
        <div class="row">
          <div class="col-5 col-md-4">
            <div class="icon-big text-center icon-{{ stat.appreciation | stateToColor }}">
              <i
                class="nc-icon nc-{{ stat.icon || 'globe' }} text-{{ stat.appreciation | stateToColor }}"
                appDemo
              >
              </i>
            </div>
          </div>
          <div class="col-7 col-md-8">
            <div class="numbers">
              <p class="card-category">{{ stat.title }}</p>
              <!-- Directive try -->
              <p class="card-title" >
                {{ stat.value }}
              <p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <hr>
        <div class="stats d-flex">
          <i class="fa fa-refresh"></i> {{ stat.updatedAt || 'Update now' }}
          <i class="fa fa-trash px-2 py-1 text-danger ml-auto btn btn-outline-danger" (click)="this.askDelete.emit()"></i>
        </div>
      </div>
    </div>
  `
})
export class StatComponent implements OnInit {
  @Output()
  public askDelete: EventEmitter<void> = new EventEmitter();

  @Input() public stat: Stat;
  constructor() {};

  ngOnInit(): void {};

  @HostListener('click')
  callback() {}
}
