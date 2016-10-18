import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

/*
* component for view of single product
* host: 'class' using Semantic UI item.class:
* saying we want to attach CSS class 'item' to host element
*/

@Component({
  selector: "product-row",
  inputs: ["product"],
  host: {"class": "item"},
  templateUrl: "./product-row.component.html"
})

export class ProductRowComponent {
  product: Product;
}
