import { Component } from '@angular/core';

import { dataset } from '../../data/recommendations';
import { RecommendationModel } from '../../models/recommendation.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  public gameRecommendations: RecommendationModel[] = dataset.filter(item => item.kind === 'Jogo');
}