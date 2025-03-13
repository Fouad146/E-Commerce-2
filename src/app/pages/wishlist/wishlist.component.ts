import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/cart/cart.service';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [ RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {

  private readonly wishlistService = inject(WishlistService)
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)

  wishDetels: any

  ngOnInit(): void {
    this.getwish()
  }

  getwish(): void {
    this.wishlistService.getUserWish().subscribe({
      next: (res) => {
        console.log(res);
        this.wishDetels=res.data

      }, error: (err) => {
        console.log(err);

      },
    })
  }

  removeIteme(id: string): void {
    this.wishlistService.removeProduct(id).subscribe({
      next: (res) => {
        console.log(res);
        this.wishDetels = res.data

      },
      error: (err) => {

        console.log(err);
      }
    })
    this.getwish()
  }

  getCartItem(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.toastrService.success(res.message, 'Fresh Cart')
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error(err.message, 'Fresh Cart')
      },
    })
    }


}
