import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../services/product.service';

import { Observable, throwError, EMPTY } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]>;
  errorMessage = '';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getUsers().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return EMPTY;
      })
    );
  }

}