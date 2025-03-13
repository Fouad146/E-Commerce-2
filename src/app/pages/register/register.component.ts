import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/services/auth/auth.service';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly authService = inject(AuthService)
  private readonly router=inject(Router)

  isLoading: boolean = false
  msgError: string=""
  msgsuccess:string=""




  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),//defult valu null
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[A-Z]\w{7,}$/)]),//^:start $:end [A-Z]:captel \w:any-word {7,}:7-caracters-or-more
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.confirmPassword })


  confirmPassword(grup: AbstractControl) {
    const password = grup.get('password')?.value
    const rePassword = grup.get('rePassword')?.value


    return password === rePassword ? null : { mismatch: true }

  }


  submitForm(): void {
    if (this.registerForm.valid) {
      this.isLoading = true
      console.log(this.registerForm);
      this.authService.sendRegesterForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == 'success') {
            this.msgsuccess= res.message
            setTimeout(() => {
              this.router.navigate(['/login'])
            }, 1000);
          };
          this.isLoading = false
        }, error: (err: HttpErrorResponse) => {
          console.log(err);
          this.msgError = err.error.message
          this.isLoading = false
        }
      })

    }else{
      this.registerForm.markAllAsTouched()
    }
  }








}
