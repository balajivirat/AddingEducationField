import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  education:any[]=[];
  details: any = [];
  data: any;

  values: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm: any) {
    this.data = contactForm;
    console.log(this.data.education);
    this.education.push(this.data.education)
    this.details.push(this.data)
    console.log(this.details);
    
  }
  removevalue(i: any){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }
}
