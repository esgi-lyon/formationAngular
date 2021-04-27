import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../../pages/stat/stat.component'
import { DashboardComponent } from './dashboard.component';
import { AccentHoverDirective } from '../../directives/accent-hover.directive';
import { StateToColorPipe } from '../../pipes/state-to-color.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AccentHoverDirective, StateToColorPipe, DashboardComponent, StatComponent],
    exports: [ DashboardComponent, StatComponent ]
})
export class DashboardModule {}
