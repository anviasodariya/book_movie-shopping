import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit {
  ngOnInit() {
  }
  cart=[];
  subscription:Subscription;
  totalPrice=0;
  index;
  delete;
  cartEdit=[];

  constructor(private cartservices: CartService)
   {
  console.log("hii");
       this.subscription = cartservices.bookData.subscribe((databook)=>{
       this.cart.push(databook);
       this.totalPrice = this.totalPrice + databook['price'];
      console.log("bye");
      console.log(databook);
      console.log("item");
      console.log(this.cart);
      console.log("cart");
      console.log(this.totalPrice);
});
    }
    Delete(i)
    {
      this.delete=this.cart[i]['price'];
      this.totalPrice=this.totalPrice-this.delete;
      console.log(i+"delete i");
      this.cart.splice(i,1);
      console.log(this.cartEdit+"hii");

    }
  
  // Editclick(i)
  // {
  //   this.index=i;
  //  this.cartEdit=this.cart[i];
  //  console.log("hii"+this.cartEdit);
  // }
  // console.log("HII");
}
