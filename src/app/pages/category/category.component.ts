import { Component, inject, OnInit } from '@angular/core';
import { HomeseviceService } from '../../core/services/home/homesevice.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Icategores } from '../../core/interfaces/icategores';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  private readonly homeseviceService = inject(HomeseviceService)

  categs: Icategores[] = []

  ngOnInit(): void {
    this.getCategorys()

  }

  Categorys: Subscription = new Subscription()




  getCategorys():void {
    this.Categorys = this.homeseviceService.getcategory().subscribe({
      next: (res) => {
        this.categs = res.data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }





}
