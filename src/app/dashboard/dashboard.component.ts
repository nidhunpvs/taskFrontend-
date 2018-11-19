import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminCommen } from '../services/admin/adminCommen.service'
import { ToastrService } from 'toastr-ng2';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers:[adminCommen]

})
export class DashboardComponent {
  roleDetails;
  comliantData;

  constructor(public __Noty:ToastrService,public __ADD:adminCommen) { }
  ngOnInit() {
  this.roleDetails = JSON.parse(localStorage.getItem('roleDetails'));
 console.log(this.roleDetails)
    }
    getComplain(value){
     value.customerName=this.roleDetails.firstname;
     value.phone=this.roleDetails.phone;
     value.customerId=this.roleDetails._id;
     value.email=this.roleDetails.email;
   this.__ADD.CustomerComplaint(value).subscribe(data => {
     if(data.status) this.__Noty.info(data.message)
     else this.__Noty.error(data.message)
            });
    }
    GetComplaint(){
      this.__ADD.getCustomerComplaint().subscribe(res => {
        console.log(res)
        if(res.data.length) {
          this.comliantData=res.data;this.__Noty.info("Customer complaints..");
        }
        else this.__Noty.info("No customer complaint found...")
               }); 
    }
    
}
