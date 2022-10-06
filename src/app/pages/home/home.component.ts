import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

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

  public recommendations: RecommendationModel[] = [];
  public categories: CategoryModel[] = [];
  public currentCategory: number = 0;
  public currentUser: string = this.authService.currentUser;

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations();
  }

  public filter(category: CategoryModel): void {
    this.currentCategory = Number(category.id);
    if (category.id == 0) {
      this.recommendations = this.recommendations;
    } else {
      return
    }
  }

  private loadRecommendations(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/recommendations';
    this.httpClient
      .get<RecommendationModel[]>(url)
      .toPromise()
      .then((data) => {
        this.recommendations = data;
      });
  }

  private loadCategories(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/categories';
    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        this.categories = data;
      });
  }
}