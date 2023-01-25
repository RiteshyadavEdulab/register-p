import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  repeatPass: string='none';


registrationForm=new FormGroup({
  FirstName:new FormControl("",[Validators.required ,Validators.minLength(2),Validators.pattern("[a-zA-z].*")]),
  lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-z].*")]),
  email:new FormControl("",[Validators.required,Validators.email]),
  mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
  gender:new FormControl("",Validators.required),
  pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
  rpwd:new FormControl("")


});
 registerationSubmited(){
  // console.log(" ",this.pwd.value);
  // console.log(" ",this.rpwd.value);
  
  if(this.pwd.value == this.rpwd.value){
  console.log(this.registrationForm.valid);
    this.repeatPass='none'
    console.log(" ",this.pwd.value);
  console.log(" ",this.rpwd.value);
  
 }else{
  this.repeatPass='inline'
 }
}

 get FirstName(): FormControl{
  return this.registrationForm.get("FirstName") as FormControl;
 }
 get lastname(): FormControl{
  return this.registrationForm.get("lastname") as FormControl;
 }
 get email(): FormControl{
  return this.registrationForm.get("email") as FormControl;
 }
 get mobile(): FormControl{
  return this.registrationForm.get("mobile") as FormControl;
 }get gender(): FormControl{
  return this.registrationForm.get("gender") as FormControl;
 }
 get pwd(): FormControl{
  return this.registrationForm.get("pwd") as FormControl;
 }
 get rpwd(): FormControl{
  return this.registrationForm.get("rpwd") as FormControl;
 }
}