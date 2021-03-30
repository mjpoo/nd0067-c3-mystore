import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {

  products: Product[] = [
    // {id: 1, name: 'Foo', price: 5.99},
    // {id: 2, name: 'Bar', price: 7.99}
  ];

  constructor(
    // private router: Router,
    // private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    console.log(this.products);
  }
}
