import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [
  { path: 'page/:id', component: PageComponent },
  { path: 'test_page', component: TestPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
