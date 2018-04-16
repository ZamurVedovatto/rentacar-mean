import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../usuario/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router){

    }

    canActivate() {
        if(this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/usuario/login']);
            return false;
        }
    }
}