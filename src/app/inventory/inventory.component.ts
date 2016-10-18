import { Component } from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: "inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: []
})

export class InventoryComponent {

  public products: Product[];

  constructor() {
    this.products = [
      {
        sku: 'MYSHOES',
        name: 'Black Running Shoes',
        imageUrl: '/resources/images/products/black-shoes.jpg',
        department: ['Men', 'Shoes', 'Running Shoes'],
        price: 109.99
      },
      {
        sku: 'NEATOJACKET',
        name: 'Blue Jacket',
        imageUrl: '/resources/images/products/blue-jacket.jpg',
        department: ['Women', 'Apparel', 'Jackets & Vests'],
        price: 238.99
      },
      {
        sku: 'NICEHAT',
        name: 'A Nice Black Hat',
        imageUrl: '/resources/images/products/black-hat.jpg',
        department: ['Men', 'Accessories', 'Hats'],
        price: 29.99
      }
    ];
  }

}
