import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators ,FormControlName} from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   
  }
  title = 'MyTask';
  // playerForm!:FormGroup
  // users: any;
  // constructor(public _fb:FormBuilder,private service:ApiService){}

  
  // ngOnInit(): void {
  //   this.playerForm=new FormGroup({
  //      name:new FormControl( null,Validators.required),
  //      team:new FormControl(null,Validators.required),
  //      runs:new FormControl(null,Validators.required),
  //      best:new FormControl(null,Validators.required),
  //   })

  //   this.Allplayer();
  // }
  

  // submitPlayer(){
  //   console.log(this.playerForm.value);
  //   this.service.addplayer(this.playerForm.value).subscribe(data=>{
  //     alert("Employee Added Successfully......");
  //     this.Allplayer();
  //     console.log(data);
  //     this.playerForm.reset();
  //   }) 
  // }

   
  // Allplayer(){
  //   this.service.Allplayer().subscribe((data: any)=>{
  //     console.log("Users",data);
  //     this.users=data;
  //   }) 
  // }
}
