import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup
 
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      date:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      region:new FormControl(null,Validators.required),
      pin:new FormControl(null,Validators.required),
    })
  }
  
  formSubmit(){
    console.log(this.registerForm.value);
    
  }



}
