import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model: AddCategoryrequest;

  constructor() {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {

  }

}
