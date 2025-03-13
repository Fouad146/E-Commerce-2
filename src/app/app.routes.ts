import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '', component: AuthLayoutComponent, canActivate:[logedGuard], children: [
    { path: 'login', loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent), title: 'Login' },
    { path: 'register', loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent), title: 'Register' },
    { path: 'forget', loadComponent: () => import('./pages/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent), title: 'Register' },

  ]},

  { path: '', component: MainLayoutComponent, canActivate:[authGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent), title: 'Home' },
    { path: 'brands', loadComponent: () => import('./pages/brands/brands.component').then(c => c.BrandsComponent), title: 'Brands' },
    { path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(c => c.CartComponent), title: 'Cart' },
    { path: 'category', loadComponent: () => import('./pages/category/category.component').then(c => c.CategoryComponent), title: 'Category' },
    { path: 'allorders', loadComponent: () => import('./pages/allorders/allorders.component').then(c => c.AllordersComponent), title: 'All Orders' },
    { path: 'products', loadComponent: () => import('./pages/products/products.component').then(c => c.ProductsComponent), title: 'Products' },
    { path: 'product-details', loadComponent: () => import('./pages/priductdetals/priductdetals.component').then(c => c.PriductdetalsComponent), title: 'Product Details' },
    { path: 'wishlist', loadComponent: () => import('./pages/wishlist/wishlist.component').then(c => c.WishlistComponent), title: 'Wishlist' },
    { path: 'checkout/:id', loadComponent: () => import('./pages/checkout/chick-out/chick-out.component').then(c => c.ChickOutComponent), title: 'Check Out' },
    { path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then(c => c.DetailsComponent), title: 'details' },

  ]},

  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent), title: 'Not Found' }
];

