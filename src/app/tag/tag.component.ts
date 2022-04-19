import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/foods/food.service';
import { Tag } from '../shared/model/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

@Input()
foodpagetags?:string[];

  tags?:Tag[]= [];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.tags = this.fs.getAllTag()
  }

}
