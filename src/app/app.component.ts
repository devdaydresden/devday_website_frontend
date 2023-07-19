import { Component, OnInit } from '@angular/core';
import { ContentService } from '../app/services/content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MenuItem, MenuService } from '../app/services/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dev-day-frontend';
  content: SafeHtml = '';


  public headermenu : Observable<MenuItem[]> = this.menuService.getHeaderMenu();

  constructor(
    private menuService: MenuService) {

  }

  ngOnInit(): void {

  }

}

