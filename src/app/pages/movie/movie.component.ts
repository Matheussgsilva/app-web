import { Component } from '@angular/core';

import { dataset } from '../../data/recommendations';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  public movieRecommendations: RecommendationModel[] = dataset.filter(item => item.kind === 'Filme');
}