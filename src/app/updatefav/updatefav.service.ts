import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UpdatefavService {

  constructor(private http:Http) { }
  updatefav(news:any):Observable<any>{
  	const updateurl="http://localhost:3003/update/";
  	// console.log(news);
  	// console.log(newsdata);
  	return this.http
  	.put(updateurl,news)
  	.map((res:Response)=>{
  		<any[]>res.json().user;
  	});
  }

}
