import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component"
import { ProductList } from "./product";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductList
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
