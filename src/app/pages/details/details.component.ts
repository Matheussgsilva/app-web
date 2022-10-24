import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { RecommendationModel } from './../../models/recommendation.model';

import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
    ) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation!: RecommendationModel;
  public similarRecommendation?: RecommendationModel[];
  public url: string = `recommendations/${this.id}`;

  @ViewChild('editForm')
  public dialog?: ElementRef<HTMLDialogElement>;
  
  public ngOnInit(): void {
   this.loadDetails();
   this.loadSimilarRecommendations();
  }

  private loadDetails() {
    this.loading = true;

    this.apiService
      .get<RecommendationModel>(this.url)
      .then((data) => {
        this.recommendation = data;
        this.loading = false;
      })
  };

  public deleteRecommendation() {
    this.loading = true;

    this.apiService
      .delete<RecommendationModel>(this.url)
      .then((_) => {
        this.router.navigateByUrl('');
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
    this.dialog?.nativeElement.showModal();
  };
}