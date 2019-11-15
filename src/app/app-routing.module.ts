import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },

  {
    path: 'alonso',
    component: AlonsoComponent
  },

  {
    path: 'pagina2',
    component: Pagina2Component
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
