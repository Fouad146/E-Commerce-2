import { Ibrand } from './../../core/interfaces/ibrand';
import { Component, inject } from '@angular/core';
import { BrandService } from '../../core/services/brands/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  private readonly brandService = inject(BrandService)

  brandsData: any

  brands: Subscription = new Subscription()


  ngOnInit(): void {
    this.getbrands()
  }





  getbrands(): void {
    this.brands = this.brandService.getBrand().subscribe({
      next: (res) => {
        console.log(res);

        this.brandsData = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



}
