import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';

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
    path: '',
    component: ContentComponent
  },
  {
    path: 'rodrigo',
    component: RodrigoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
