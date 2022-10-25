import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('joao.scarpa@designa.com', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
  });

  public login(): void {
    if (this.form.valid) {
      this.apiService
        .post<UserModel>('/sessions', this.form.value)
        .then((data) => {
          this.authService.login(data);
        })
        .catch((response) => {
          alert(response.error.error);
        });
    }
  }
}