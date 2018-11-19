import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

import { adminCommen } from '../services/admin/adminCommen.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['full-layout.component.css'],

  providers: [adminCommen]
})

export class FullLayoutComponent implements OnInit {

  activeUserId;
  userData;

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(public __Noty:ToastrService,private router: Router, private adminService:adminCommen ){}


  ngOnInit(): void {

  }
  
  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/'])

  }
}
