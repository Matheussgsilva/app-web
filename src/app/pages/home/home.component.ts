import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';

import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations?: RecommendationModel[] = [];
  public categories?: CategoryModel[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;
  public currentUser: string = this.authService.currentUser.name;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations(this.currentCategory);
  }

  public filter(categoryId: number): void {
    this.currentCategory = categoryId;
    this.loadRecommendations(categoryId);
  }

  private loadRecommendations(categoryId: number): void {
    this.loading = true;

    this.apiService
      .get<RecommendationModel[]>(`/recommendations/${categoryId == this.ALL_RECOMMENDATIONS ? '' : categoryId}`)
      .then((data) => {
        this.recommendations = data;
        this.loading = false;
      });
  }

  private loadCategories(): void {
    this.apiService
      .get<CategoryModel[]>('/categories')
      .then((data) => {
        this.categories = data;
      });
  }
}