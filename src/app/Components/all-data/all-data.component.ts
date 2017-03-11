import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { Response, Http } from '@angular/http';
@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
items:any = [];

  constructor(public httpService:HttpService) { }

  ngOnInit() {
  		this.httpService.getFunc().subscribe(
  				data => {
  			const myArr = [];
  			const itemKey = [];
  			for(let key in data){
  				myArr.push(data[key]);
  				itemKey.push(key);
  			}
  			this.items = myArr;
 	
  		}
  			)
  }

}
