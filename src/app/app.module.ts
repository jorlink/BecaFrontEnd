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
import { HernanComponent } from './components/shared/hernan/hernan/hernan.component';
<<<<<<< HEAD
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
=======
=======
<<<<<<< HEAD
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
=======
import { BastianComponent } from './components/shared/bastian/bastian.component';
>>>>>>> 6eac2fbc68a3e195b47449f6fd9ff2aa3f0631d3
>>>>>>> dev-Hernan
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { DavidFalconComponent } from './components/shared/david/david-falcon/david-falcon.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { GeregereComponent } from './components/shared/geregere/geregere.component';
=======
>>>>>>> aa6b5fea80baf14dea68e6acfd8d387d00448d1b
>>>>>>> dev-Hernan
=======
import { GeregereComponent } from './components/shared/carlos/geregere.component';
>>>>>>> 421381670ed2b113d1ab723dac5101bf9aadf5b3

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
    HernanComponent
<<<<<<< HEAD
    CristabelComponent,
    BastianComponent,
=======
=======
<<<<<<< HEAD
    CristabelComponent,
=======
    BastianComponent,
>>>>>>> 6eac2fbc68a3e195b47449f6fd9ff2aa3f0631d3
>>>>>>> dev-Hernan
    AndyComponent,
    SebastianComponent,
    NelsonComponent,
    CamiloComponent,
    AndyComponent,
    SebastianComponent,
    DavidFalconComponent,
    XimenaComponent,
<<<<<<< HEAD
    RodrigoComponent,
<<<<<<< HEAD
    GeregereComponent,
=======
    RodrigoComponent
>>>>>>> aa6b5fea80baf14dea68e6acfd8d387d00448d1b
>>>>>>> dev-Hernan
=======
    GeregereComponent
>>>>>>> 421381670ed2b113d1ab723dac5101bf9aadf5b3
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
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
