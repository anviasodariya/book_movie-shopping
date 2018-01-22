
import { Injectable } from '@angular/core';

@Injectable()


export class ShoppingService {

  constructor() { }

  getdataobject(){
  return[
  {'name': 'hindi','price':'12'},
  {'name': 'English','price':'12'},
  {'name': 'Gujarati','price':
  '12'}
  ];
  }

}
