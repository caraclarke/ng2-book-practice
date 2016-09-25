/*
* @angular
*/
import { Component } from "@angular/core";

@Component({
  selector: "home",
  styleUrls: [],
  templateUrl: "./home.component.html"
})

export class HomeComponent {

  // public properties
  public title: string;

 constructor() {
   this.title = "Home is working";
 }

}
