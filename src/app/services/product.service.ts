import { Injectable } from '@angular/core';

import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
import { comment } from '../shared/comment';
import {  Observable, delay, of,map } from "rxjs";

import { HttpClient } from '@angular/common/http';
import { Config } from '../shared/config'; 


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ///affectation
  
  products!:Product[];   // apartir base de donne

  // injection dans le  constructor( ) { }
  constructor(private http: HttpClient, private config: Config) { } 


  getAllProducts():Observable<Product[]>
  {
   
    return this.http.get<Product[]>(this.config.bdUrl + 'products'); 
  

  }

 getProduct(ref:String):Observable<Product>{
  // return <Product> this.products.find(product=>product.reference===ref)
  // return of(this.products.filter((product)=>(product.reference===ref))[0]).pipe(delay(2000));
  return this.http.get<Product[]>(this.config.bdUrl+
    'products/?reference='+ref ).pipe(map(products=>products[0])); 
    


 }



  changeQte( index:number,qte:number){
    this.products[index].stockQte-=qte;
     }

     /////le client saisie le commentaire
     //ajouter un commentaire au tableau des commentaires d'un produit
addComment(product:Product,comment:comment){
  product.comments.push(comment);
}


  
}
