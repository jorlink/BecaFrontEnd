import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import {LorenaComponent} from './components/shared/lorena/lorena/lorena.component';

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
    path: 'Lore',
    component: LorenaComponent

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
