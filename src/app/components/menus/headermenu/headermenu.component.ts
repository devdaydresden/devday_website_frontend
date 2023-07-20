import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/services/menu.service';

@Component({
  selector: 'dd-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent {
  
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {
    
  }

  @Input() menuItems: MenuItem[] = []

}
