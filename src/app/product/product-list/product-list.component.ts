import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

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

export class ProductList {
  /*
  * @ input productList: the product array passed to us
  */
  productList: Product[];

  /*
  * @output onProductSelected - outputs current product whenever new product is selected
  */
  onProductSelected: EventEmitter<Product>;

  /*
  * @property currentProduct - local state containing the currently selected product
  */
  public currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }
}
