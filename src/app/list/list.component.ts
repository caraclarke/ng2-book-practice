/*
* @angular
*/
import { Component, OnInit } from "@angular/core";

/*
* Passit
*/
import { Secret } from "./secret/secret";
import { SecretService } from "./secret/secret.service";

@Component({
  providers: [ SecretService ],
  selector: "list",
  styleUrls: ["./list.component.scss"],
  templateUrl: "./list.component.html"
})

export class ListComponent implements OnInit {

  public resultArray: Secret[];
  public constantArray: Secret[];
  private secrets: Secret[];
  private selectedSecret: Secret;
  private secret: Secret;

  constructor(private secretService: SecretService) {
    this.secret = new Secret();
    this.resultArray = [];
  }

  public ngOnInit() {
    this.getSecrets();
  }

  /*
  * call getSecrets method in SecretService
  */
  public getSecrets() {
    this.secretService.getSecrets().then((secrets) => {
      this.secrets = secrets;
      this.constantArray = secrets;
    });
  }

}
