import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import { IgnaciaComponent } from './components/shared/ignacia/ignacia/ignacia.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'pagina2',
    component: Pagina2Component
  },
  {
    path: 'ignacia',
    component: IgnaciaComponent
  },
  {
    path: '**',
    component: ContentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
