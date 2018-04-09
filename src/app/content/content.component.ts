import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public blogs = [];
   

  constructor(private service: BlogserviceService, private router: Router){}

  ngOnInit(){
     
     }

    blogData(form: NgForm){
     	
     var blog_data = form.value;
        
     if(blog_data['title'] !== "" &&  blog_data['description'] !== ""){

     	this.service.addblogs(blog_data)
     	    .subscribe(data => {
     	    	if(data['status'] == true){
				    Swal(
				      'Saved',
				      'Your Blog is Published Successfuly :)',
				      'success'
				    )
     	    		 this.router.navigate(['./']);
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });

     	} else {
     		console.log("empty fields");
     	}
     }

    // editData(form: NgForm){
     	
    //  var blog_data = form.value;
    //  if(blog_data['title'] !== "" &&  blog_data['description'] !== ""){

    //  this.service.editblogs(this.blog.id,blog_data)
    //  	    .subscribe(data => {
    //  	    	if(data['status'] === true){
    //  	    		this.blog.title = "";
    //  	            this.blog.description = "";
    //  	            this.edit = !this.edit;
    //  	             Swal(
				//       'Updated',
				//       'Your Blog is Updated Successfuly :)',
				//       'success'
				//     )
     	    		
    //  	    		this.blogs = this.blogs.map(data1 => {
     	    			
    //  	    			if(data1._id === data['blog']._id){
     	    				
    //  	    				data1.title = data['blog'].title;
    //  	    				data1.description = data['blog'].description;
     	    				
    //  	    			}
    //  	    			return data1;
    //  	    		});
    //  	    	}
    //  	    },
    //  	    error => {
    //  	    	console.log(error['error'])	
    //  	    });
    //  	    } else {
    //  		console.log("empty fields")
    //  	}
    //  }

    
     
    //  cancelUpdate(){
    //  	 this.blog.title = "";
    //  	 this.blog.description = "";
    //  	 this.edit = !this.edit;
    //  }

}
