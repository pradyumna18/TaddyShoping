import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  playerForm!:FormGroup
  users: any;
  constructor(public _fb:FormBuilder,private service:ApiService){}

  
  ngOnInit(): void {
    this.playerForm=new FormGroup({
       name:new FormControl( null,Validators.required),
       team:new FormControl(null,Validators.required),
       runs:new FormControl(null,Validators.required),
       best:new FormControl(null,Validators.required),
    })

    this.Allplayer();
  }
  

  submitPlayer(){
    console.log(this.playerForm.value);
    this.service.addplayer(this.playerForm.value).subscribe(data=>{
      alert("Employee Added Successfully......");
      this.Allplayer();
      console.log(data);
      this.playerForm.reset();
    }) 
  }

   
  Allplayer(){
    this.service.Allplayer().subscribe((data: any)=>{
      console.log("Users",data);
      this.users=data;
    }) 
  }
}
