import { Component, ViewEncapsulation } from "@angular/core";

import { Product } from "./models/product";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {

  constructor() {}

}
