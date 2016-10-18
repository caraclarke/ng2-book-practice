import { Component, EventEmitter } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  selector: "product-department",
  inputs: ["product"],
  templateUrl: "./product-department.component.html"
})

export class ProductDepartmentComponent {
  product: Product;
}
