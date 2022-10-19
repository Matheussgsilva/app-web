import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RecommendationModel } from './../../models/recommendation.model';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    ) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation?: RecommendationModel;
  public similarRecommendation?: RecommendationModel[];
  
  public ngOnInit(): void {
   this.loadDetails();
   this.loadSimilarRecommendations();
  }

  private loadDetails() {
    const url = `${environment.apiUrl}/recommendations/${this.id}`;

    this.loading = true;
    this.httpClient
      .get<RecommendationModel>(url)
      .toPromise()
      .then((data) => {
        this.recommendation = data;
        this.loading = false;
      })
  };

  private loadSimilarRecommendations() {
   {/*const url = `${environment.apiUrl}/recommendations?category=${this.recommendation.category.id}`;

    this.httpClient
      .get<RecommendationModel[]>(url)
      .toPromise()
      .then((data) => {
        this.similarRecommendation = data;
      });*/}
  }

  public showEdit() {

  };

  public destroy() {

  };
}