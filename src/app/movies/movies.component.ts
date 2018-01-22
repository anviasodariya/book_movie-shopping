import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // dataobject=[];
  book=[];
  constructor(private cartservices:CartService) { }
  dataobject=[
    {'name': 'tamasha','price':12},
    {'name': 'bahubali2','price':24},
    {'name': 'Gujarati','price':12}
    ];
  ngOnInit() {}
  Buymovie(selectedData)
  {
    this.cartservices.addOrder(selectedData);
  }
}
