import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/foods/food.service';
import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Foods;
  constructor(
    private activateRoute:ActivatedRoute, 
    private foodservice:FoodService, 
    private cartservice:CartService, 
    private router:Router) 
    { 
    activateRoute.params.subscribe((params) => {
      if (params.id)
      this.food = foodservice.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
