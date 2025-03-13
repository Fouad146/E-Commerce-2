import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../../core/services/order/order.service';

@Component({
  selector: 'app-chick-out',
  imports: [ReactiveFormsModule],
  templateUrl: './chick-out.component.html',
  styleUrl: './chick-out.component.scss'
})
export class ChickOutComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly orderService = inject(OrderService)

  cartId:string=""


  ngOnInit(): void {
    this.getCartId()
  }
  getCartId(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        console.log(param.get('id'));
        this.cartId = param.get('id')!
      }
    )

  }



  checkOutForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required])
  }




  )
  subForm(): void {
    if (this.checkOutForm.valid) {
this.orderService.checkOut(this.cartId,this.checkOutForm.value).subscribe({
  next:(res)=>{
console.log(res);
if (res.status=="success") {
open(res.session.url ,"_self")
}

},
error:(err)=>{
  console.log(err);

  },
})
    } else {
      this.checkOutForm.markAllAsTouched()
    }
  }


}
