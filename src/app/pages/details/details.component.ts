import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from './../../core/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/cart/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly homesevice = inject(ProductsService)
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)


  productDetails: Iproduct ={} as Iproduct


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        console.log(p.get('id'));
        let idProduct = p.get('id');
        this.homesevice.getSpecificProducts(idProduct).subscribe({
          next: (res) => {
            console.log(res.data);
            this.productDetails = res.data
          }, error: () => {

          }
        })


      },
      error: (err) => {
        console.log(err);

      }
    })
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



    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      pullDrag: false,
      dots: true,
      dotsData:true,
      navSpeed: 700,
      nav:false,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
      },
    }

}

