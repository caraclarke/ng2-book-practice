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
  public productList: Product[];

  /*
  * @output onProductSelected - outputs current product whenever new product is selected
  */
  public onProductSelected: EventEmitter<Product>;

  /*
  * @property currentProduct - local state containing the currently selected product
  */
  public currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  /*
  * set this.currentProduct to the product passed in
  * emit product that was clicked on our output
  */
  public clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  /*
  * accepts Product and returns true if products sku matches currentProduct sku
  * otherwise returns false
  */
  public isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }
}
