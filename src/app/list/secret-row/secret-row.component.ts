import { Component, EventEmitter } from "@angular/core";

import { Secret } from "../secret/secret";

@Component({
  selector: "secret-row",
  inputs: ["secret"],
  host: { "class": "item" },
  templateUrl: "./secret-row.component.html"
})

export class SecretRowComponent {
  public secret: Secret;
}
