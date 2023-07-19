import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

interface WPMenuList {
  term_id:          number;
  name:             string;
  slug:             string;
  term_group:       number;
  term_taxonomy_id: number;
  taxonomy:         string;
  description:      string;
  parent:           number;
  count:            number;
  filter:           string;
  ID:               number;
  meta:             WPMenuListMeta;
}

interface WPMenuListMeta {
  links: WPMenuListLinks;
}

interface WPMenuListLinks {
  collection: string;
  self:       string;
}


interface WPMenu {
  ID:          number;
  name:        string;
  slug:        string;
  description: string;
  count:       number;
  items:       WPMenuItem[];
  meta:        WPMenuMeta;
}

interface WPMenuItem {
  id:          number;
  order:       number;
  parent:      number;
  title:       string;
  url:         string;
  attr:        string;
  target:      string;
  classes:     string;
  xfn:         string;
  description: string;
  object_id:   number;
  object:      string;
  object_slug: string;
  type:        string;
  type_label:  string;
  children?:   WPMenuItem[];
}

interface WPMenuMeta {
  links: WPMenuLinks;
}

interface WPMenuLinks {
  collection: string;
  self:       string;
}

export enum MenuLinkType {
  page = 'page'
}

export interface MenuItem  {
  title: string;
  pageId: number;
  type: MenuLinkType;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient,) { }

  public getHeaderMenu(): Observable<MenuItem[]> {
    return this.httpClient.get<WPMenuList[]>(environment.apiBaseUrl + '/wp-api-menus/v2/menus').pipe(
      map(menus => menus.filter(menu => menu.name === 'Headermenu')[0]),
      switchMap((headermenu : WPMenuList) => this.httpClient.get<WPMenu>(environment.apiBaseUrl + '/wp-api-menus/v2/menus/' + headermenu.ID)),
      map((result : WPMenu) => {
        console.log('result', result.items)
        return result.items}),
      map((items:  WPMenuItem[]) => items.map(item => this.mapMenuItem(item))),
      catchError(error => {
        console.log(error);
        return []
      })
    )
  }

  private mapMenuItem(item : WPMenuItem) : MenuItem {
    let menuItem : MenuItem = {
      title: item.title,
      pageId: item.object_id,
      type: item.object as MenuLinkType
    }

    if (item.children) {
      menuItem.children = [];

      item.children.forEach(childEntry => {
        let child = {
          title: childEntry.title,
          pageId: childEntry.object_id,
          type: childEntry.object as MenuLinkType
        }
        menuItem.children?.push(child);
      });
    }

    return menuItem;
  }
}
