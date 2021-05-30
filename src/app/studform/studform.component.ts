import { Component, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators ,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studform',
  templateUrl: './studform.component.html',
  styleUrls: ['./studform.component.css']
})

export class StudformComponent {
 
OutOfMark: any = ['50', '100'];
  
  constructor(private vf: FormBuilder,private router:Router) { }
   form = this.vf.group({
   name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(100)]),
   rollno:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{10}$')]),
   subject:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+')]),
   ObtainedMark:new FormControl('',[Validators.pattern('^[0-9]')]),
   OutOf: new FormControl('', Validators.required),
   addsubject: this.vf.array([]) ,
 })
 
 get f(){
    return this.form.controls;
 }
 addsubject() : FormArray {
  return this.form.get("addsubject") as FormArray
}
 
newQuantity(): FormGroup {
  return this.vf.group({
    OutOf: '',
    ObtainedMark: '',
    subject: '',
  })
}
 
AddMoreSubject() {
  this.addsubject().push(this.newQuantity());
}
 

  Submit()
  {    
    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.router.navigateByUrl('/scorecard');
  }

}
