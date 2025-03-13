import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  isLoading:boolean=false


  private authService = inject(AuthService)
  private router = inject(Router)



  step: number = 1

  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{5,}$/)])
  })
  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{7,}$/)])
  })

  verifyEmailSub(): void {
    this.isLoading=true
    let emailValue = this.verifyEmail.get('email')?.value
    this.resetPassword.get('email')?.patchValue(emailValue)
    this.authService.setEmailVerify(this.verifyEmail.value).subscribe({
      next: (res) => {

        console.log(res);
        if (res.statusMsg ==='success') {
          this.step = 2

          this.isLoading=false
        }
      },
      error: (err) => {
        console.log(err);
//
      },
    })
  }
  verifyCodeSub(): void {
    this.isLoading=true
    this.authService.setCodeVerify(this.verifyCode.value).subscribe({
      next: (res) => {
        console.log(res);

        if (res.status === 'Success') {
          this.step = 3

          this.isLoading=false
        }
      },
      error: (err) => {
        console.log(err);
        this.isLoading=false
        // this.step = 1

      },
    })
  }
  resetPasswordSub(): void {
    this.isLoading=true
    this.authService.resetPass(this.resetPassword.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.token)
        this.authService.saveUserData()
        this.router.navigate(['/home'])

        this.isLoading=false
      }
      ,
      error: (err) => {
        this.isLoading=false
        console.log(err);
        // this.step = 1

      },
    })
  }




}
