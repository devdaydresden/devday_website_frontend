import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { SpeakerDetailsComponent } from './pages/speaker-details/speaker-details.component';

const routes: Routes = [
  { path: 'page/:id', component: PageComponent },
  { path: 'test_page', component: TestPageComponent },
  { path: 'speaker-details/:speakerCode', component: SpeakerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
