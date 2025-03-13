import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../core/cart/cart.service';
import { Icart } from '../../core/interfaces/icart';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  private readonly cartService = inject(CartService)
  private router = inject(Router)


  cartDetails: Icart = {} as Icart

  ngOnInit(): void {
    this.getCartData()
  }



  getCartData(): void {
    this.cartService.getUserCart().subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  removeIteme(id: string): void {
    this.cartService.removeCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data

      },
      error: (err) => {

        console.log(err);
      }
    })
  }

  updatCount(id: string, count: number): void {
    this.cartService.updatCartProduct(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data

      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  clearMyCart(): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.clearCart().subscribe({
          next: (res) => {
            console.log(res);
            if (res.message === "success") {

              this.cartDetails = {} as Icart
            }

          },
          error: (err) => {

            console.log(err);
          }
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  payMiant(): void {
    Swal.fire({
      title: "Do you want to buy these products?",
      text: "You will be taken to the product review",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#166534",
      cancelButtonColor: "#d33",
      // confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
this.router.navigate(['/checkout',this.cartDetails._id])

      }
    });
  }


}
