import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService){}

  public email: string = '';
  public name: string = '';

  public login(): void {
    this.authService.login(this.email,this.name)
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

}