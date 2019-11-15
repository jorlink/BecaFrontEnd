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
<<<<<<< HEAD
=======
import { ErickComponent } from './components/shared/erick/erick/erick.component';
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';

import { ErickComponent } from './components/shared/erick/erick/erick.component';

import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';

import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';

>>>>>>> 4c1292ac7c80886bd804a7468f3ed7b683e93059
import { FabianComponent } from './components/shared/fabian/fabian/fabian.component';
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { LorenaComponent } from './components/shared/lorena/lorena/lorena.component';
=======
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
import { OliverComponent } from './components/shared/oliver/oliver.component';
import { GeregereComponent } from './components/shared/carlos/geregere.component';
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';
import { PostserviceService } from './components/shared/rodrigo/services/postservice.service';
>>>>>>> 286a9e03d5c7f218f2f891ab0f78a9375b9a0ce2
=======
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
import { GeregereComponent } from './components/shared/geregere/geregere.component';
import { OliverComponent } from './components/shared/oliver/oliver.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';

import { OliverComponent } from './components/shared/oliver/oliver.component';
import { GeregereComponent } from './components/shared/carlos/geregere.component';
import { AlonsoComponent } from './components/shared/alonso/alonso.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';
import { PostserviceService } from './components/shared/rodrigo/services/postservice.service';
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';

>>>>>>> 4c1292ac7c80886bd804a7468f3ed7b683e93059

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    Pagina2Component,
    FormComponent,
<<<<<<< HEAD
=======
    ErickComponent,
    DavidFalconComponent,
    HernanComponent,
    CristabelComponent,
    BastianComponent,
>>>>>>> 4c1292ac7c80886bd804a7468f3ed7b683e93059
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
<<<<<<< HEAD
<<<<<<< HEAD
    LorenaComponent
=======
    RodrigoComponent,
=======
    RodrigoComponent,
    GeregereComponent,
    RodrigoComponent,
    GeregereComponent,
>>>>>>> 4c1292ac7c80886bd804a7468f3ed7b683e93059
    OliverComponent,
    GeregereComponent,
    HernanComponent,
    AlonsoComponent,
<<<<<<< HEAD
    DavidFalconComponent
>>>>>>> 286a9e03d5c7f218f2f891ab0f78a9375b9a0ce2
=======
    DavidFalconComponent,
    SebastianComponent

>>>>>>> 4c1292ac7c80886bd804a7468f3ed7b683e93059
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
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
