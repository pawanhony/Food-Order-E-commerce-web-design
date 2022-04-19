import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  @Input() visible:boolean =false;
  @Input() notFoundMessage:string = 'Nothing Found';
  @Input() resetLinkText: string = 'Reset';
  @Input() resetLinkRoute: string = '/';

  constructor() { }

  ngOnInit(): void {
  }

}
