import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Directive } from '@angular/core';
import {   passvalidation } from './directive'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  reactiveForm:FormGroup;
  submitted:boolean=false;

  constructor(private formbuilder:FormBuilder) {
    this.reactiveForm = this.formbuilder.group({
      firstname:new FormControl (null, [Validators.required,Validators.pattern('[A-Za-z0-9]+[A-Za-z0-9]')]),
      lastname:new FormControl (null, [Validators.required,Validators.pattern('[A-Za-z0-9]+[A-Za-z0-9]')]),
      date:new FormControl(null,[Validators.required]),
      number:new FormControl(null,[Validators.required]),
      email:new FormControl (null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmpassword:new FormControl(null,[Validators.required]),
      password1:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      password2:new FormControl(null,[Validators.required])
    },
    {
      Validators:this.MustMatch('password','confirmpassword')
    })
   }

   get f (){
    return this.reactiveForm.controls
   }

   


   MustMatch(controlName:string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return
      }
      if(control.value ! == matchingControl.value){
        matchingControl.setErrors({MustMatch:true})
      }
      else {
        matchingControl.setErrors(null);
      }
    }
   }

   onSubmit() {
    this.submitted = true;
    if(this.reactiveForm.invalid){
      return;
    }
   }

  ngOnInit(): void {
  }


  passfrom= new FormGroup(
    {
      password1: new FormControl('',[Validators.required,Validators.minLength(6)]),
      password2: new FormControl('',[Validators.required]),
    },
    [passvalidation.MatchValidator( 'password1' , 'password2' )]
  );

  get passwordMatchError(){
    return (
      this.passfrom.getError('mismatch') && 
      this.passfrom.get('password2')?.touched
    )
  }


}
