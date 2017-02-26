import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(public http: Http) { }

  postFunc(postData:any){
  		const body = JSON.stringify(postData);
  		const headers = new Headers();
  		headers.append("Content-Type", "application/json");
  	
  	return this.http.post("https://your-project-ID.firebaseio.com/data.json", body, {headers: headers}).map((response:Response) => response.json());
  }
}
 