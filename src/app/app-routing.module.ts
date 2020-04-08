import { PointPresseComponent } from './point-presse/point-presse.component';
import { RessourceComponent } from './ressource/ressource.component';
import { GouvernementComponent } from './gouvernement/gouvernement.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DitesNousComponent } from './dites-nous/dites-nous.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'point-presse', component: PointPresseComponent },
  { path: 'actualités', component: ActualiteComponent },
  { path: 'gouvernement', component: GouvernementComponent },
  { path: 'ressources', component: RessourceComponent },
  { path: 'dites-nous', component: DitesNousComponent },
  { path: '*', component: AccueilComponent },
  { path: '', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
