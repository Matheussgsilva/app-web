import { Component, Input } from '@angular/core';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.css'],
})
export class RecommendationItemComponent {
  @Input() recommendation!: RecommendationModel;

  public badgeColor(): string {
    switch (this.recommendation.category.name) {
      case 'Filme':
          return "primary";
      case 'Série':
          return "danger";
      case 'Jogo':
          return "success";
      case 'Livro':
          return "warning";
      default:
          return "info"
      }
    }
}