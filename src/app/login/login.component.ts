import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner"
  accno = "Account Number"
  acno = ""
  pswd = ""

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if (this.loginForm.valid) {
       this.ds.login(acno, pswd)
      .subscribe((result:any)=>{
        if (result){
          localStorage.setItem('currentUser',result.currentUser)
          localStorage.setItem('currentAcno',result.currentAcno)
          localStorage.setItem('token',result.token)

          alert(result.message)
          this.router.navigateByUrl('dashboard')

        }
      },
      result=>{
        alert(result.error.message)
      }
      )
      
    }
    else{
      alert("Invalid Form")
    }

  
  }
}