import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { dataset } from '../../data/recommendations';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
  public recommendations: RecommendationModel[] = dataset;

  public kinds: string[] = []

  public form: FormGroup = new FormGroup( {
    name: new FormControl(''),
    imageURL: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  })

  ngOnInit(): void {
    dataset.forEach((item) => {
      if (!this.kinds.includes(item.kind)) {
        this.kinds.push(item.kind);
      }
    });
  }
}