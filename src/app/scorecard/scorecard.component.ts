import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent{
  user: any;
  totalmark:number=0;
  obtainMark:number=0;
  avg:number=0.0;
  grade:string="pass";
 
  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('user')!);
    
    for (let i = 0; i <this.user.addsubject.length ; i++)
     {
     this.obtainMark+=parseInt(this.user.addsubject[i].ObtainedMark);
     this.totalmark+=parseInt(this.user.addsubject[i].OutOf);
    }

    this.avg=this.obtainMark/this.totalmark*100;
   
    if(this.avg>=75)
    {
      this.grade= "Pass with Distinction";
    }
    else if(this.avg >= 60 && this.avg < 75)
    {
      this.grade= "Pass with First class";
    }
    else if(this.avg >= 35 && this.avg < 60)
    {
      this.grade= "Pass";
    }
    else{
      this.grade= "Fail";
    }
   }
  
}
