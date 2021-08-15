import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      'username':new FormControl('',[Validators.required,Validators.email]),
      'pswrd':new FormControl('',[Validators.required])
    })
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  onSubmit(){
    if(this.loginForm.valid)
    {
     
    }
    else{
      this.markFormGroupTouched(this.loginForm);
    }
  }
}
