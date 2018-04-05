import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class BlogserviceService {

  constructor(private http: HttpClient) { }

   getblogs(){
     return this.http.get(`${environment.local_api_url}/api/blogs`);
   }
    getsingleblogs(id){

     return this.http.get(`${environment.local_api_url}/api/blogs/${id}`);
   }

    addblogs(data){
    	var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2bmVlc2hAc3BpbmVvci5jb20iLCJpZCI6IjVhYzQ3YTc3ZTBlZjM0NWM2MTBiOWJkNyIsImlhdCI6MTUyMjkxMzk4OH0.Zdy-Zvs3D2X3a7VyLD7GIgFny4vXhqB5goTo-jxQSP0'
    	const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': `Bearer ${token}`
		  })
     };

     return this.http.post('http://localhost:4000/api/blogs',data,httpOptions);
   }

   editblogs(id,data){
    	var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2bmVlc2hAc3BpbmVvci5jb20iLCJpZCI6IjVhYzQ3YTc3ZTBlZjM0NWM2MTBiOWJkNyIsImlhdCI6MTUyMjkxMzk4OH0.Zdy-Zvs3D2X3a7VyLD7GIgFny4vXhqB5goTo-jxQSP0'
    	const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': `Bearer ${token}`
		  })
     };

     return this.http.put(`${environment.local_api_url}/api/blogs/${id}`,data,httpOptions);
   }

   deleteblogs(id){
    	var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2bmVlc2hAc3BpbmVvci5jb20iLCJpZCI6IjVhYzQ3YTc3ZTBlZjM0NWM2MTBiOWJkNyIsImlhdCI6MTUyMjkxMzk4OH0.Zdy-Zvs3D2X3a7VyLD7GIgFny4vXhqB5goTo-jxQSP0'
    	const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': `Bearer ${token}`
		  })
     };

     return this.http.delete(`${environment.local_api_url}/api/blogs/${id}`,httpOptions);
   }
}
