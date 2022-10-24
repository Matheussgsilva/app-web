import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  constructor(private router: Router) {}

  public redirectToHome(categoryId: number): void {
    this.router.navigate(['', { queryParams: { categoryId } }]);
  }
}