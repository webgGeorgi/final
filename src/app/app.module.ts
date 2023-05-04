import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentslogoAPComponent } from './componentslogo-ap/componentslogo-ap.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercaDEComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentslogoAPComponent,
    LogoAPComponent,
    AcercaDEComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HysComponent,
    ProyectoComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
