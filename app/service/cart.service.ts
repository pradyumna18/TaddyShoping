import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  cartDataList:any=[];
  productsList=new BehaviorSubject<any>([]);

//Get Product Data
  getProductsData(){
    return this.productsList.asObservable()
  }

//Set Products Data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productsList.next(product)
  }

// Add To Cart Details
  addToCart(product:any){
     this.cartDataList.push(product);
     this.productsList.next(this.cartDataList);
     this.getTotalAmount();
     console.log(this.cartDataList);
     
  }

//Get Total Amount
  getTotalAmount():number{
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
    });
    return grandTotal;
  }

//Remove Cart Data One By One
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productsList.next(this.cartDataList);
  }

//Remove All Cart Data
  removeAllCart(){
    this.cartDataList=[];
    this.productsList.next(this.cartDataList);
  }
}
