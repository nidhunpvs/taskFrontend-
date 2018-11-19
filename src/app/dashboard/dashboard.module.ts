import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    FormsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
