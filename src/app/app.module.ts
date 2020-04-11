import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PointPresseComponent } from './point-presse/point-presse.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { GouvernementComponent } from './gouvernement/gouvernement.component';
import { RessourceComponent } from './ressource/ressource.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DitesNousComponent } from './dites-nous/dites-nous.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SituationComponent } from './situation/situation.component';
import { VotreSanteComponent } from './votre-sante/votre-sante.component';
import { MatExpansionModule } from '@angular/material/expansion';
// import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PointPresseComponent,
    ActualiteComponent,
    GouvernementComponent,
    RessourceComponent,
    HeaderComponent,
    DitesNousComponent,
    FooterComponent,
    SidebarComponent,
    SituationComponent,
    VotreSanteComponent,
    // AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
