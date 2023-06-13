import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2_2023';
  isLogin = false
  constructor(public auth: AuthService){
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.isLogin = true
      }
    })
  }

  login(){
    this.auth.loginWithRedirect()
  }
}