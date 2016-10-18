import { Component } from "@angular/core";

/*
* component for rendering ProductRows
* also stores currently selected product
*/

@Component({
  selector: "product-list",
  inputs: ["productList"],
  outputs: ["onProductSelected"],
  templateUrl: "./product-list.component.html"
})

export class ProductList {}
