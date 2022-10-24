import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private router: Router
    ){}

  public email: string = '';
  public password: string = '';

  public login(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/sessions';

    if (this.form.valid) {
      this.httpClient
        .post<UserModel>(url, this.form.value)
        .toPromise()
        .then((_) => {
          this.router.navigateByUrl('');
        })
        .catch((resp) => {
          alert(resp.error.error);
        });
    } else {
      alert('Favor preencher o formulário corretamente')
    }
  }

  public form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

}