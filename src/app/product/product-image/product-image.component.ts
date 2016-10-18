import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "product-image",
  host: {class: 'ui small image'},
  inputs: ['product'],
  templateUrl: "./product-image.component.html"
})

export class ProductImageComponent {
  product: Product;
}
