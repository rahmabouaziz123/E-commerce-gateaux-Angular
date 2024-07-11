import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { comment } from '../shared/comment';
import { Location } from '@angular/common';

import { Config } from '../shared/config'; 


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  implements OnInit {


  product!:Product;
  comment:comment={rating:0,comment:"",date:new Date()+""};
// on fait injecter  un constructeur de la classe service

bdUrl:string; 
constructor(private serProd:ProductService ,
   private route :ActivatedRoute ,
    private Location :Location,private config: Config) {
      this.bdUrl=this.config.bdUrl; 
    }


goBack():void{
  this.Location.back();
}


addcomment(){
  if (this.comment.comment!="") {
    this.serProd.addComment(this.product,this.comment);
    this.comment={rating:0,comment:"",date:new Date()+""};
  }

}
ngOnInit():void{

const ref:String =this.route.snapshot.params['reference'];


this.serProd.getProduct(ref).subscribe(product=>this.product =product)

}}
