import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
 
  constructor(private _http:HttpClient,private formBuilder:FormBuilder,private router:Router){}

  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      uname:[''],
      email:[''],
      mobile:[''],
      pass:[''],
    })
  }
  sign(){
    this._http.post<any>("http://localhost:3000/user",this.signupForm.value).subscribe(res=>{
      alert("Signup Successfully....");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something Went Wrong.....")
    })
  }




  // sign(){
  //   this._http.post<any>("http://localhost:3000/user",this.signupForm.value).subscribe(res=>{
  //     alert("Signup Successfully...");
  //     console.log(this.signupForm.value);
  //     this.signupForm.reset();
  //     this.router.navigate(['login'])
  //   },err=>{
  //     alert("successfull....")
  //   }
  //   )
  // }

}
