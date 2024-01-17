import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




    constructor(private _http:HttpClient,private formBuilder:FormBuilder,private router:Router){}


   loginForm!:FormGroup

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname:[''],
      pass:[''],
    })
  }

  // login(){
  //   this._http.get<any>("http://localhost:3000/user",this.loginForm.value).subscribe(res=>{
  //     const user =res.find((a:any)=>{
  //       return a.uname==this.loginForm.value.uname &&a.pass==this.loginForm.value.pass
  //     })
  //     if(user){
  //       alert("Sccessfull login....");
  //       this.loginForm.reset();
  //       this.router.navigate(['form']);
  //     }else{
  //       alert("Worng User....")
  //     }
  //   },err=>{
  //     alert("Wrong")
  //   })
  // }
  login(){
    this._http.get<any>("http://localhost:3000/user").subscribe(res=>{
      const user =res.find((a:any)=>{
        return a.uname===this.loginForm.value.uname &&a.pass===this.loginForm.value.pass
      })
      if(user){
         alert("Login Successfully");
         this.loginForm.reset();
         this.router.navigate(['form'])
      }else{
        alert("User Not Found")
      }
    },err=>{
      alert("Wrong")
    }
    )
  }

}
