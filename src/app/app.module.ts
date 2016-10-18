/*
* @angular
*/
import { BrowserModule  } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { routing, appRoutingProviders } from "./app.routing";

/*
* Third Party Other
*/
import { ClipboardModule } from "angular2-clipboard";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component"
import { InventoryComponent } from "./inventory";
import { ListComponent } from "./list";
import { ProductList } from "./product";
import { ProductRowComponent } from "./product";
import { ProductDepartmentComponent } from "./product";
import { ProductImageComponent } from "./product";
import { ProductPriceComponent } from "./product";

import Api from "./ngsdk/api";
import NgPassitSDK from "./ngsdk/sdk.ts";
import { SecretService } from "./list";

@NgModule({
  imports: [
    BrowserModule,
  ClipboardModule,
  FormsModule,
  HttpModule,
  routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    ListComponent,
    ProductList,
    ProductRowComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent
  ],
  providers: [
    appRoutingProviders,
    Api,
    NgPassitSDK,
    SecretService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
