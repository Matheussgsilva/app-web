import { Component, Input } from '@angular/core';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-recommendation-item',
  templateUrl: './recommendation-item.component.html',
  styleUrls: ['./recommendation-item.component.css'],
})
export class RecommendationItemComponent {
  @Input() recommendation!: RecommendationModel;

  badgeColor(): string {
    switch (this.recommendation.kind) {
      case 'Filme':
          return "#1BC6B4";
      case 'Série':
          return "#BB86FC";
      case 'Jogo':
          return "#98D936";
      case 'Livro':
          return "#F2CA52";
      default:
          return "#A68D60"
      }
    }
}