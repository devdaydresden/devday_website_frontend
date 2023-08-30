import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { TestGalleryComponent } from './pages/test-gallery/test-gallery.component';

const routes: Routes = [
  { path: 'page/:id', component: PageComponent },
  { path: 'test_gallery', component: TestGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
