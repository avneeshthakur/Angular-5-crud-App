import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public blogs = [];
  public blog = {
  	id:"",
  	title:"",
  	description:""
  };
  public edit = false;
 

  constructor(private service: BlogserviceService){}

  ngOnInit(){
     this.service.getblogs()
          .subscribe(data => {
           this.blogs = data['blogs'];	 	
          });
     }

    blogData(form: NgForm){
     	
     var blog_data = form.value;
        
     if(blog_data['title'] !== "" &&  blog_data['description'] !== ""){

     	this.service.addblogs(blog_data)
     	    .subscribe(data => {
     	    	if(data['status'] == true){
     	    		this.blog.title = "";
                 	this.blog.description = "";

				    Swal(
				      'Saved',
				      'Your Blog is Published Successfuly :)',
				      'success'
				    )
     	    		this.blogs.push(data['data']);
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });

     	} else {
     		console.log("empty fields");
     	}
     }

    editData(form: NgForm){
     	
     var blog_data = form.value;
     if(blog_data['title'] !== "" &&  blog_data['description'] !== ""){

     this.service.editblogs(this.blog.id,blog_data)
     	    .subscribe(data => {
     	    	if(data['status'] === true){
     	    		this.blog.title = "";
     	            this.blog.description = "";
     	            this.edit = !this.edit;
     	             Swal(
				      'Updated',
				      'Your Blog is Updated Successfuly :)',
				      'success'
				    )
     	    		
     	    		this.blogs = this.blogs.map(data1 => {
     	    			
     	    			if(data1._id === data['blog']._id){
     	    				
     	    				data1.title = data['blog'].title;
     	    				data1.description = data['blog'].description;
     	    				
     	    			}
     	    			return data1;
     	    		});
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });
     	    } else {
     		console.log("empty fields")
     	}
     }

     deleteBlog(id) {
     	Swal({
		  title: 'Are you sure?',
		  text: 'You will not be able to recover this Blog!',
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {
		    Swal(
		      'Deleted!',
		      'Your Blog  has been deleted.',
		      'success'
		    )
		    this.service.deleteblogs(id)
     	    .subscribe(data => {
     	    	if(data['status'] === true){
                     this.blogs = this.blogs.filter(data1 => {
                         if(data1._id !== data['blog']._id)
                         return data1;
                     });	    		
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });   	
		
		  } else if (result.dismiss === Swal.DismissReason.cancel) {
		    Swal(
		      'Cancelled',
		      'Your Blog file is safe :)',
		      'error'
		    )
		  }
		})
     	
     }

     getBlog(id) {

     	this.service.getsingleblogs(id)
     	    .subscribe(data => {
     	    	if(data['status'] === true){
     	    		this.blog.title = data['blog'].title;
     	    		this.blog.description = data['blog'].description;
     	    		this.blog.id = data['blog']._id;
     	    		this.edit = !this.edit;
     	    		
     	    	}
     	    },
     	    error => {
     	    	console.log(error['error'])	
     	    });  	
     }
     
     cancelUpdate(){
     	 this.blog.title = "";
     	 this.blog.description = "";
     	 this.edit = !this.edit;
     }

}
