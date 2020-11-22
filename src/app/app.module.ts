import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ProductService } from './service/product.service';
import { StudentService } from './service/student.service';
import { TemplateComponent } from './template/template.component';
import { FormsModule } from '@angular/forms';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent,
    TemplateComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
