import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PointPresseComponent } from './point-presse/point-presse.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { GouvernementComponent } from './gouvernement/gouvernement.component';
import { RessourceComponent } from './ressource/ressource.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PointPresseComponent,
    ActualiteComponent,
    GouvernementComponent,
    RessourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
