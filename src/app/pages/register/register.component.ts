import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {}