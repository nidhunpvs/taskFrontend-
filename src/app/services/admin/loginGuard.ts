import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router';
//  import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor (private router: Router){

	}

 	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot  ) {
    if(localStorage.getItem("userData")){
      console.log("AUTH GUARD LET GO");
      return true;
    }
    else{
      console.log("BLOCKED BY AUTH GUARD");
      return false;
    }

    //return this.auth.isLoggedIn();

  }
}
