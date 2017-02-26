import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
title:any;
content:any;
  constructor(public httpService: HttpService) { }

  ngOnInit() {
    
  }

  getFormData(){
    this.httpService.postFunc({title: this.title, content:this.content}).subscribe(
        (res: Response) => console.log(res));
           this.title = this.content = "";
    
  }

}