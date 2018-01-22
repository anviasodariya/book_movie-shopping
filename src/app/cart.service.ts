import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CartService {
  
constructor() { }

  public newOrderBook = new Subject<any>();
   bookData = this.newOrderBook.asObservable();
   addOrder(selectedData: any)
   {
     this.newOrderBook.next(selectedData);
     console.log(selectedData);
   }

}
