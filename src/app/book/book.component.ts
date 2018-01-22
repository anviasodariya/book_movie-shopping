import { Component, OnInit, Input  } from '@angular/core';
// import { ShoppingService } from '../shopping.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  
})

export class BookComponent implements OnInit {
 // dataobject=[];
// book=[];
constructor(private cartservices:CartService) { }
dataobject=[
    {'name': 'Best indian poetry','price':10},
    {'name': 'Who am i?','price':12},
    {'name': 'Adjust Everywhere','price':
    12}
    ];
  ngOnInit() { 
    // this.dataobject= this._shoppngservices.getdataobject();
  }
Buy(selectedData)
{
  this.cartservices.addOrder(selectedData);
}
  //dataArray=[]; all= false;  
  
//    select(a){

//     console.log(a);
//     this.book.push(a);
    
//   } 
//   add(b)

//   {
//    // this.dataobject.push();
// console.log(this.book);
//   }

  
}
