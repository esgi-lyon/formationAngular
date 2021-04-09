import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../../pages/stat/stat.component'
import { DashboardComponent } from './dashboard.component';
import { AccentHoverDirective } from 'app/directives/accent-hover.directive';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AccentHoverDirective, DashboardComponent, StatComponent ],
    exports: [ DashboardComponent, StatComponent ]
})
export class DashboardModule {}
