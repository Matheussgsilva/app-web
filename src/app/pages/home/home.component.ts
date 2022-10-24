import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';
import { AuthService } from '../../services/auth.service';

import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations?: RecommendationModel[] = [];
  public categories?: CategoryModel[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;
  public currentUser: UserModel = this.authService.currentUser;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations(this.ALL_RECOMMENDATIONS);
  }

  public filter(categoryId: number): void {
    this.currentCategory = categoryId;
    this.loadRecommendations(categoryId)
  }

  private loadRecommendations(categoryId: number): void {
    const url = `${environment.apiUrl}/recommendations`;

    let params = {};
    if (categoryId != this.ALL_RECOMMENDATIONS) {
      params = { category: categoryId };
    }

    this.loading = true;
    this.httpClient
      .get<RecommendationModel[]>(url, { 
        params: new HttpParams({ fromObject: params }) })
      .toPromise()
      .then((data) => {
        this.recommendations = data;
        this.loading = false;
      });
  }

  private loadCategories(): void {
    const url = `${environment.apiUrl}/categories`;
    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        this.categories = data;
      });
  }
}