import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

/*
* component for view of single product
*/

@Component({
  selector: "product-row",
  inputs: ["product"],
  host: {"class": "item"},
  templateUrl: "./product-row.component.html"
})

export class ProductRowComponent {}
