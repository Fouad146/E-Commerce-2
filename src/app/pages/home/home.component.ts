import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { Icategores } from '../../core/interfaces/icategores';
import { Iproduct } from '../../core/interfaces/iproduct';
import { HomeseviceService } from '../../core/services/home/homesevice.service';
import { CartService } from '../../core/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
@Component({
  selector: 'app-home',
  imports: [CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
[x: string]: any;

  private readonly homeseviceService = inject(HomeseviceService)
  private readonly cartService = inject(CartService)
  private readonly wishlistService = inject(WishlistService)
  private readonly toastrService = inject(ToastrService)


  Products: Subscription = new Subscription()
  Categorys: Subscription = new Subscription()

  homepro: Iproduct[] = []
  homecat: Icategores[] = []
  wishlist: Set<string> = new Set();

  ngOnInit(): void {
    this.getHomeProducts()
    this.getHomeCategory()

  }

  ngOnDestroy(): void {
    this.Products.unsubscribe
    this.Categorys.unsubscribe
  }



  getHomeProducts() {
    this.Products = this.homeseviceService.getproducts().subscribe({
      next: (res) => {
        // console.log(res.data)
        this.homepro = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  getHomeCategory() {
    this.Categorys = this.homeseviceService.getcategory().subscribe({
      next: (res) => {
        // console.log(res.data)
        this.homecat = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
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
    getWish(id: string): void {
      if (this.wishlist.has(id)) {
        this.wishlist.delete(id);
        this.toastrService.info('Removed from wishlist', 'Fresh Cart');
      } else {
        this.wishlistService.addPrudectToWish(id).subscribe({
          next: (res) => {
            console.log(res);
            this.toastrService.success(res.message, 'Fresh Cart');
            this.wishlist.add(id);
          },
          error: (err) => {
            console.log(err);
            this.toastrService.error(err.message, 'Fresh Cart');
          },
        });
      }
    }
    isInWishlist(id: string): boolean {
      return this.wishlist.has(id);
    }

    private saveWishlist(): void {
      localStorage.setItem('wishlist', JSON.stringify(Array.from(this.wishlist)));
    }

    private loadWishlist(): void {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        this.wishlist = new Set(JSON.parse(storedWishlist));
      }
    }

    }



