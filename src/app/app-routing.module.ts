import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

const routes : Routes = [
   { path:"about",component:AboutComponent },
   { path:"blogs",component:ContentComponent }
];

@NgModule({
	 imports:[RouterModule.forRoot(routes)],
	 exports:[RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [AboutComponent,ContentComponent];