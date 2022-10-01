import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService){}

  public email: string = '';
  public name: string = '';

  public login(): void {
    this.authService.login(this.email)
  }

}