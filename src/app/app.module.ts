import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
// pour que ngModel sera active
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommentComponent } from './comment/comment.component';

//// base json
import { HttpClientModule } from '@angular/common/http';
import { Config } from './shared/config';
import { CustomConfig } from './shared/CustomConfig'; 





FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    ProductDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [
   {
    provide: Config, 
    useClass: CustomConfig 
   }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
