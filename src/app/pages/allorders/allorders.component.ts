// import { jwtDecode } from 'jwt-decode';
// import { Component, inject, OnInit } from '@angular/core';
// import { FinorderService } from '../../core/services/finel/finorder.service';
// import { ActivatedRoute } from '@angular/router';
// import { OrderService } from '../../core/services/order/order.service';
// import { Iorder } from '../../core/interfaces/iorder';

// @Component({
//   selector: 'app-allorders',
//   imports: [],
//   templateUrl: './allorders.component.html',
//   styleUrl: './allorders.component.scss'
// })
// export class AllordersComponent implements OnInit {

//   private readonly finorderService = inject(FinorderService)
//   private readonly activatedRoute = inject(ActivatedRoute)
//   private readonly orderService = inject(OrderService)


//   allOrdersUser: Iorder = {} as Iorder;
//   User: any

//   ngOnInit(): void {

//     // this.getOrders()
//     this.getUserId()
//   }

//   getUserId(): void {
//     const token = localStorage.getItem('userToken');
//     if (token) {
//       const decodedToken: any = jwtDecode(token);
//       console.log('User ID:', decodedToken);
//       this.User = decodedToken
//       this.getOrders()
//     } else {
//       console.log('No token found in localStorage');
//     }
//   }



//   getOrders(): void {
//     this.finorderService.getAllOrders(this.User.id).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.allOrdersUser = res
//       },
//       error: (err) => {
//         console.log(err);

//       }
//     })
//   }



// }
import { jwtDecode } from 'jwt-decode';
import { Component, inject, OnInit } from '@angular/core';
import { FinorderService } from '../../core/services/finel/finorder.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/services/order/order.service';
import { Iorder } from '../../core/interfaces/iorder';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {

  private readonly finorderService = inject(FinorderService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly orderService = inject(OrderService);

  allOrdersUser: Iorder[] = []; // ✅ Changed to an array in case multiple orders exist
  userId: string | null = null; // ✅ Storing only the user ID

  ngOnInit(): void {
    this.getUserId();
  }

  getUserId(): void {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      console.log('Decoded Token:', decodedToken);

      this.userId = decodedToken.id || decodedToken.userId; // ✅ Handle different token structures

      if (this.userId) {
        this.getOrders();
      } else {
        console.error('User ID not found in token');
      }
    } else {
      console.log('No token found in localStorage');
    }
  }

  getOrders(): void {
    if (!this.userId) {
      console.error('Cannot fetch orders, User ID is missing');
      return;
    }

    this.finorderService.getAllOrders(this.userId).subscribe({
      next: (res) => {
        console.log('Orders:', res);
        this.allOrdersUser = res; // ✅ Assuming `res` is an array of orders
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }
}

