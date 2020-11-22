import { Component, OnInit } from '@angular/core';
import { Model } from './Product';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  model: Model = new Model();

  constructor() { }

  ngOnInit(): void {
  }
// getProduct(key: number): Product{
//   return this.model.getProduct(key);
// }

// getProducts(): Products[]{
//   return this.model.getProducts();
// }

}
