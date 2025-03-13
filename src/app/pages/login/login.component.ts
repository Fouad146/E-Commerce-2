import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly authService = inject(AuthService)
  private readonly router=inject(Router)

  isLoading: boolean = false
  msgError: string=""
  msgsuccess:string=""




  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-Z]\w{7,}$/)]),//^:start $:end [A-Z]:captel \w:any-word {7,}:7-caracters-or-more
  })




  submitForm(): void {
    if (this.loginForm.valid) {
      this.isLoading = true
      console.log(this.loginForm);
      this.authService.sendLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            this.msgsuccess= res.message

            setTimeout(() => {
              localStorage.setItem('userToken',res.token)

            this.authService.saveUserData()

              this.router.navigate(['/home'])
            }, 300);
          };
          this.isLoading = false
        }, error: (err: HttpErrorResponse) => {
          console.log(err);
          this.msgError = err.error.message
          this.isLoading = false
        }

      })

    }else{
      this.loginForm.markAllAsTouched()
    }
  }








}


