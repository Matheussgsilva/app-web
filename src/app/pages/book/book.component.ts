import { Component } from '@angular/core';

import { dataset } from '../../data/recommendations';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  public bookRecommendations: RecommendationModel[] = dataset.filter(item => item.kind === 'Livro');
}