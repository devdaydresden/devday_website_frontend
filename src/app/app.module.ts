import { Type, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeplanComponent } from './timeplan/timeplan.component';

import  { createCustomElement } from '@angular/elements';
import { WorkshoplistComponent } from './workshoplist/workshoplist.component';
import { HeadermenuComponent } from './components/menus/headermenu/headermenu.component';
import { PageComponent } from './pages/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeplanComponent,
    WorkshoplistComponent,
    HeadermenuComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

  private components: WebComponent[] = [
    {tag: 'dd-timeplan', type: TimeplanComponent},
    {tag: 'dd-workshoplist', type: WorkshoplistComponent}
  ];

  constructor(private injector: Injector) {
    this.components.forEach((component: WebComponent) => {
      customElements.define(component.tag, createCustomElement(component.type, { injector }));
    });

  }
}

interface WebComponent {
  tag: string;
  type: Type<any>
}
