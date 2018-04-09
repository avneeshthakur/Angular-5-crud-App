import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes : Routes = [
   { path:"",component:HomeComponent },
   { path:"about",component:AboutComponent },
   { path:"create",component:ContentComponent },
   { path:"blogs/:id",component:BlogDetailComponent },
   { path:"**",component:PageNotFoundComponent }
];

@NgModule({
	 imports:[RouterModule.forRoot(routes)],
	 exports:[RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [AboutComponent,ContentComponent,PageNotFoundComponent,
HomeComponent,BlogDetailComponent];