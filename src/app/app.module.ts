import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';

import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'toastr-ng2';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { adminLogin } from './commen/login/adminlogin.component';


// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AccordionModule } from 'ngx-bootstrap';
// import {MatExpansionModule} from '@angular/material';
// import {MatExpansionModule} from '@angular/material/expansion';





const app_routes:Routes = [
  {path: 'admin', component: adminLogin}]
@NgModule({
  imports: [
    RouterModule.forRoot(app_routes),
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    // AccordionModule.forRoot(),
    ChartsModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule added
    // MatExpansionModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    adminLogin
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
 }
