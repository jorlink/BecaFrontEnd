import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { ContentComponent } from './components/main/content/content.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ServicioPruebaService } from './services/servicio-prueba.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pagina2Component } from './components/shared/pagina2/pagina2.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/shared/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErickComponent } from './components/shared/erick/erick/erick.component';
import { FabianComponent } from './components/shared/fabian/fabian/fabian.component';
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
import { LorenaComponent } from './components/shared/lorena/lorena/lorena.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
import { OliverComponent } from './components/shared/oliver/oliver.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';
import { PostserviceService } from './components/shared/rodrigo/services/postservice.service';
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';
import { FiltrarPipe } from './components/shared/rodrigo/pipe/filtrar.pipe';
import { DetalleComponent } from './components/shared/rodrigo/detalle/detalle.component';
import { FiltrosComponent } from './components/shared/rodrigo/filtros/filtros.component';
import { GeregereComponent } from './components/shared/carlos/geregere.component';
import { TablaUsuarioComponent } from './components/shared/prueba/tabla-usuario/tabla-usuario.component';
import { GaleriaFotosComponent } from './components/shared/prueba/galeria-fotos/galeria-fotos.component';
import { VerDetalleComponent } from './components/shared/prueba/ver-detalle/ver-detalle.component';
import { ComponentOcultoComponent } from './components/shared/nelson/component-oculto/component-oculto.component';
import { FiltradorComponent } from './components/shared/nelson/filtrador/filtrador.component';
import { DetenidosdesaparecidosService } from './components/shared/camilo/camilo/app-service/servicio1/detenidosdesaparecidos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    Pagina2Component,
    FormComponent,
    ErickComponent,
    DavidFalconComponent,
    HernanComponent,
    CristabelComponent,
    BastianComponent,
    FabianComponent,
    CristabelComponent,
    BastianComponent,
    AndyComponent,
    SebastianComponent,
    NelsonComponent,
    CamiloComponent,
    AndyComponent,
    SebastianComponent,
    XimenaComponent,
    LorenaComponent,
    RodrigoComponent,
    OliverComponent,
    HernanComponent,
    AlonsoComponent,
    DavidFalconComponent,
    SebastianComponent,
    FiltrarPipe,
    DetalleComponent,
    FiltrosComponent,
    GeregereComponent,
    TablaUsuarioComponent,
    GaleriaFotosComponent,
    VerDetalleComponent,
    ComponentOcultoComponent,
    FiltradorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioPruebaService,
    PostserviceService,
    HttpClient,
    DetenidosdesaparecidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }