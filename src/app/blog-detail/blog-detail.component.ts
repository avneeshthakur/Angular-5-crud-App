import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service: BlogserviceService) { }
 public blog = {};
  ngOnInit() {
   let id = this.route.snapshot.paramMap.get('id');
   this.getBlog(id);
  }
  getBlog(id) {
       console.log("Get blog by id");
     	this.service.getsingleblogs(id)
     	    .subscribe(data => {
     	    	if(data['status'] === true){
     	    		this.blog = data['blog'];
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });  	
     }
}
