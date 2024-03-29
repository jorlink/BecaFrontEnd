import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { ContentComponent } from './components/main/content/content.component';
import {LorenaComponent} from './components/shared/lorena/lorena/lorena.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
import { GeregereComponent } from './components/shared/carlos/geregere.component';
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';
import { OliverComponent } from './components/shared/oliver/oliver.component';
import { ErickComponent } from './components/shared/erick/erick/erick.component';
import { FabianComponent } from './components/shared/fabian/fabian/fabian.component';
import { TablaUsuarioComponent } from './components/shared/prueba/tabla-usuario/tabla-usuario.component';
import { GaleriaFotosComponent } from './components/shared/prueba/galeria-fotos/galeria-fotos.component';

const router: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'ximena', component: XimenaComponent },
  { path: 'sebastian', component: SebastianComponent },
  { path: 'andy', component: AndyComponent },
  { path: 'camilo', component: CamiloComponent },
  { path: 'cristabel', component: CristabelComponent },
  { path: 'nelson', component: NelsonComponent },
  { path: 'rodrigo', component: RodrigoComponent },
  { path: 'carlos', component: GeregereComponent },
  { path: 'hernan', component: HernanComponent },
  { path: 'david', component: DavidFalconComponent },
  { path: 'oliver', component: OliverComponent },
  { path: 'alonso', component: AlonsoComponent },
  { path: 'lorena', component: LorenaComponent},
  { path: 'bastian', component: BastianComponent},
  { path: 'erick', component: ErickComponent},
  { path: 'fabian', component: FabianComponent},
  { path: 'tablaUser', component: TablaUsuarioComponent },
  { path: 'galeriaFotos', component: GaleriaFotosComponent },
  { path: '**', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }