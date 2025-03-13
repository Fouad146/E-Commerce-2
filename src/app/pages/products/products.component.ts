import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Subscription = new Subscription
  allProducts: Iproduct[] = []

  private readonly productsService = inject(ProductsService)
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)

  getProducts(): void {
    this.products = this.productsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allProducts = res.data

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }

  ngOnDestroy(): void {
    this.products.unsubscribe
  }


  getCartItem(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=> {
        console.log(res);
        this.toastrService.success(res.message,'Fresh Cart')

      },
      error:(err)=> {
        console.log(err);
        this.toastrService.error(err.message,'Fresh Cart')


      },
    })

  }

}
