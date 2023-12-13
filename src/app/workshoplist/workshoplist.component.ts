import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dd-workshoplist',
  templateUrl: './workshoplist.component.html',
  styleUrls: ['./workshoplist.component.scss']
})
export class WorkshoplistComponent implements OnInit {
  private _list: number = 0;
  @Input('data-list')
  public get list(): number {
    return this._list;
  }
  public set list(value: number) {
    this._list = value - 1;
  }

  @Input('data-foo') foo: string;

  public todos: any;

  constructor( ) {

  }

  ngOnInit(): void {
  }

}
