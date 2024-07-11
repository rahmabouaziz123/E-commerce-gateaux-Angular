import { Component } from '@angular/core';


import { Product } from '../shared/product';
import { OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


import { Config } from '../shared/config'; 



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

// on fait  un constructeur de la classe service

   bdUrl:string; 

  constructor(private servProd:ProductService ,private config: Config ) {
    
 this.bdUrl=this.config.bdUrl; 

   }


  qte:number[]=[0,0,0,0];
  total:number[]=[0,0,0,0];
  finalTotal=0;


  color!:String;
  datejour!:Date;
  products!:Product[];

  addCommand(index:number){
  this.total[index]=this.products[index].unitPrice*this.qte[index];
  }

  order(){
    for(let i=0;i<4;i++)
    {
      this.finalTotal+=this.total[i];
     
      if (this.total[i]!=0) {
      
        this.servProd.changeQte(i,this.qte[i]);
      }
      this.qte[i]=0;
      this.total[i]=0;
    }
   
  }

 




  message="";
  quantite=0;
   res=0;

  modifier(){
    this.message="svp clik button";  
    this.color="red";
  }





 
  
ngOnInit(){

 this.color="black";
  this.datejour=new Date();
  // this.products= PRODUCTS;
  //products on fait un new varaible de type tableaux vide (products)
  // this.products = this.servProd.getAllProducts();
  this.servProd.getAllProducts().subscribe(products=>this.products=products);


  

}
 

}
