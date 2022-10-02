import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private authService: AuthService){}

  public name: string = '';

  public logout(): void {
    this.authService.logout()
  }

  public getName(): string {
    return this.name = this.authService.currentUserName;
  }

  public register(): void {
    
  }

}