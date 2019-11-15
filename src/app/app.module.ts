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
import { CristabelComponent } from './components/shared/cristabel/cristabel.component';
import { BastianComponent } from './components/shared/bastian/bastian.component';
import { NelsonComponent } from './components/shared/nelson/nelson/nelson.component';
import { CamiloComponent } from './components/shared/camilo/camilo/camilo.component';
import { AndyComponent } from './components/shared/andy/andy/andy.component';
import { SebastianComponent } from './components/shared/sebastian/sebastian/sebastian.component';
import { XimenaComponent } from './components/shared/ximena/ximena/ximena.component';
import { RodrigoComponent } from './components/shared/rodrigo/rodrigo/rodrigo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    Pagina2Component,
    FormComponent,
    CristabelComponent,
    BastianComponent,
    AndyComponent,
    SebastianComponent,
    NelsonComponent,
    CamiloComponent,
    AndyComponent,
    SebastianComponent,
    XimenaComponent,
    RodrigoComponent
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
