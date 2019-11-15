import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
import { GeregereComponent } from './components/shared/carlos/geregere.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'ximena', component: XimenaComponent },
  { path: 'sebastian', component: SebastianComponent },
  { path: 'andy', component: AndyComponent },
  { path: 'bastian', component: BastianComponent },
  { path: 'camilo', component: CamiloComponent },
  { path: 'cristabel', component: CristabelComponent },
  { path: 'nelson', component: NelsonComponent },
  { path: 'rodrigo', component: RodrigoComponent },
  { path: 'carlos', component: GeregereComponent },
  { path: 'cristabel', component: CristabelComponent },
  { path: 'cristabel', component: CristabelComponent },
  { path: '**', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
