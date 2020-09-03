import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  path: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._getPath();
  }

  private _getPath() {
    this._route.data.subscribe((data: { path: string }) => this.path = data.path);
  }

}
