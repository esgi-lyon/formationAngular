import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../../pages/stat/stat.component'
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ DashboardComponent, StatComponent ],
    exports: [ DashboardComponent, StatComponent ]
})
export class DashboardModule {}
