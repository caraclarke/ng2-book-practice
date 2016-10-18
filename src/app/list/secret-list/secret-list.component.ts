import { Component, EventEmitter } from "@angular/core";

import { Secret } from "../secret/secret";

@Component({
  selector: "secrets-list",
  inputs: ["secretList"],
  outputs: ["onSecretSelected"],
  templateUrl: "./secret-list.component.html"
})

export class SecretListComponent {

  public secretList: Secret[];
  public onSecretSelected: EventEmitter<Secret>;
  private selectedSecret: Secret;

  constructor() {
    this.onSecretSelected = new EventEmitter();
  }

  public clicked(secret: Secret) {
    this.selectedSecret = secret;
    this.onSecretSelected.emit(secret);
  }

  /*
  * returns true if current secret name matches selectedSecret name
  * otherwise returns false
  */
  public isSelected(secret: Secret): boolean {
    if (!secret || !this.selectedSecret) {
      return false;
    }

    return secret.name === this.selectedSecret.name;
  }
}
