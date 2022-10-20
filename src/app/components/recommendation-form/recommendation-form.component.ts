import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoryModel } from '../../models/category.model';
import { RecommendationModel } from '../../models/recommendation.model';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.css']
})
export class RecommendationFormComponent implements OnInit {
  @Input() recommendation?: RecommendationModel;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public categories?: CategoryModel[] = [];
  public isNew: boolean = true;
  public id: number = 0;

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image_url: new FormControl(''),
    category_id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  public ngOnInit(): void {
    this.loadCategories();
    if (this.recommendation) {
      this.id = this.recommendation.id;
      this.isNew = false;
      this.form = new FormGroup({
        name: new FormControl(this.recommendation?.name, [Validators.required]),
        image_url: new FormControl(this.recommendation?.image_url),
        category_id: new FormControl(this.recommendation?.category.id, [
          Validators.required,
        ]),
        description: new FormControl(this.recommendation?.description, [
          Validators.required,
        ]),
      });
    }
    console.log(this.recommendation)
  }

  public save(): void {
    const url = `${environment.apiUrl}/recommendations`;

    if (this.form.valid) {
      this.httpClient
        .post(url, this.form.value)
        .toPromise()
        .then((_) => {
          this.router.navigateByUrl('');
        })
        .catch((resp) => {
          alert(resp.error.error);
        });
    } else {
      alert('Favor preencher o formulário corretamente')
    }
  }

  private loadCategories(): void {
    const url = `${environment.apiUrl}/categories`;

    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        this.categories = data;
      });
  }
}