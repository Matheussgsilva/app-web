import { Component } from '@angular/core';

import { dataset } from '../../data/recommendations';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent {
  public serieRecommendations: RecommendationModel[] = dataset.filter(item => item.kind === 'Série');
}