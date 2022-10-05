import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
  constructor(private httpClient: HttpClient, private router: Router) {}

  public catergories: CategoryModel[] = [];

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image_url: new FormControl(''),
    category_id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.loadCategories();
  }

  public save(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/recommendations';

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
    const url = 'https://jp-recommendations-api.herokuapp.com/categories';

    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        console.log(data)
        this.catergories = data;
      })
  }
}