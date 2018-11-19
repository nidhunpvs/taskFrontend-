import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()

export class adminCommen {

  url = environment.backendUrl;
  userData;
  headersPost;
  constructor(private http: Http) {
    // JSON.parse(localStorage.getItem('userData'));
    this.userData=localStorage.getItem('userData');
    console.log(this.userData,"datahe");
    

  }


CustomerComplaint(data){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', this.userData);

  return this.http.post(`${this.url}/api/auth/addComlaint`, data, { headers })
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}
getCustomerComplaint(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-access-token', this.userData);

  return this.http.post(`${this.url}/api/auth/getComplaint`, { headers })
    .map(res => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

}
Signup(value) {
  let data = {
    email: value.email.toLowerCase(),
    password: value.password,
    phone:value.phone.toString(),
    firstname:value.firstname,
    role:value.role,
    roleId:value.roleId
  }

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http
    .post(
      `${this.url}/api/auth/register`,
      JSON.stringify(data),
      { headers }
    )
    .map(res => res.json())
    .map((res) => {


      return res;
    });
}
  login(email, password) {
    let data = {
      email: email.toLowerCase(),
      password: password
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        `${this.url}/api/auth/login`,
        JSON.stringify(data),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {


        return res;
      });
  }

  logout() {
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.userData);

   this.headersPost= { headers };
      
    return this.http.get(`${this.url}/api/auth/logout`,this.headersPost)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
