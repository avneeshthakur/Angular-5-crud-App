import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BlogserviceService } from './blogservice.service';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule , RoutingComponents} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BlogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
