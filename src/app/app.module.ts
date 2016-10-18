import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component"
import { InventoryComponent } from "./inventory";
import { ProductList } from "./product";
import { ProductRowComponent } from "./product";
import { ProductDepartmentComponent } from "./product";
import { ProductImageComponent } from "./product";
import { ProductPriceComponent } from "./product";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    ProductList,
    ProductRowComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
