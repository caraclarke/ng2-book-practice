import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "price-display",
  inputs: ["price"],
  templateUrl: "./product-price.component.html"
})

export class ProductPriceComponent {
  price: number;
}
