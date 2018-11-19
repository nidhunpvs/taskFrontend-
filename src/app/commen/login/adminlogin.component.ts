import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { adminCommen } from '../../services/admin/adminCommen.service'
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

declare var jQuery: any;


@Component({
  selector: 'app-admin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
  providers: [adminCommen]

})

export class adminLogin implements OnInit {
  hidebox:boolean=false;
  options = [{name:"AGENT",id:"1"},{name:"CUSTOM",id:"2"}];
  myOption;
  roleId;

constructor(public __Noty:ToastrService,private adminLog: adminCommen, private router: Router) {
  this.hidebox=false;

    }
  ngOnInit() {}
  Submitlogin(value: any) {
    
    this.adminLog.login(value.email,value.password).subscribe(data => {
      console.log(data)
    if(data.auth ||data.data) {
      localStorage.setItem('roleDetails', JSON.stringify(data.data.user));

      localStorage.setItem('userData',data.data.token);

      this.__Noty.info(data.message);
      this.router.navigate(['/dashboard']);
     }else alert(data.message)
    }, err => {
      var myObj = JSON.parse(err._body);
      this.__Noty.error(myObj.message)
    });
   }
   signUpform(data:any){
data.role=this.myOption;  
data.roleId=this.roleId; 
this.adminLog.Signup(data).subscribe(res => {
  if(res.data){
   this.hidebox=false;
   this.__Noty.info("Success")

      }else{
        this.__Noty.error(res.message)

      }
     }, err => {
     
     });
   }
   onOptionsSelected(options){
       
     this.myOption=options
     if(this.myOption=="AGENT") this.roleId="1";
     else this.roleId="2";
   }
   myBox(){
     this.hidebox=!this.hidebox

   }
}
