import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public blogs = [];

  constructor(private service: BlogserviceService) { }

  ngOnInit() {
  	this.service.getblogs()
          .subscribe(data => {
           this.blogs = data['blogs'];	 	
          });
  }
  //  deleteBlog(id) {
  //    	Swal({
		//   title: 'Are you sure?',
		//   text: 'You will not be able to recover this Blog!',
		//   type: 'warning',
		//   showCancelButton: true,
		//   confirmButtonText: 'Yes, delete it!',
		//   cancelButtonText: 'No, keep it'
		// }).then((result) => {
		//   if (result.value) {
		//     Swal(
		//       'Deleted!',
		//       'Your Blog  has been deleted.',
		//       'success'
		//     )
		//     this.service.deleteblogs(id)
  //    	    .subscribe(data => {
  //    	    	if(data['status'] === true){
  //                    this.blogs = this.blogs.filter(data1 => {
  //                        if(data1._id !== data['blog']._id)
  //                        return data1;
  //                    });	    		
  //    	    	}
  //    	    },
  //    	    error => {
  //    	    	console.log(error['error'])	
  //    	    });   	
		
		//   } else if (result.dismiss === Swal.DismissReason.cancel) {
		//     Swal(
		//       'Cancelled',
		//       'Your Blog file is safe :)',
		//       'error'
		//     )
		//   }
		// })
     	
  //    }

     // getBlog(id) {
     //   console.log("Get blog by id");
     // 	// this.service.getsingleblogs(id)
     // 	//     .subscribe(data => {
     // 	//     	if(data['status'] === true){
     // 	//     		this.blog.title = data['blog'].title;
     // 	//     		this.blog.description = data['blog'].description;
     // 	//     		this.blog.id = data['blog']._id;
     // 	//     	}
     // 	//     },
     // 	//     error => {
     // 	//     	console.log(error['error'])	
     // 	//     });  	
     // }

}
