import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  education:any[]=[];
  detail: any = {};
  details: any = [];
  value: any;
  values: any[] = [];
  contactForm = new FormGroup({
    firstname: new FormControl(),
    education: new FormControl(),
    education0: new FormControl(),
    education1: new FormControl(),
    education2: new FormControl(),
    education3: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
   
    country: new FormControl()
  })
  contactForm1 = new FormGroup({
    education: new FormControl(),

  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

    this.value = this.contactForm.value;
    console.log(this.value.education);
    this.education.push(this.value.education)
    this.details.push(this.value)
    console.log(this.details);
  }
  removevalue(i: any){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }
}
