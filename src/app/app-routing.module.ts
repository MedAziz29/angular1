import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateursComponent } from './animateurs/animateurs.component';
import { AddAnimateurComponent } from './add-animateur/add-animateur.component';
import { UpdateAnimateurComponent } from './update-animateur/update-animateur.component';
import { RechercheParTvComponent } from './recherche-par-tv/recherche-par-tv.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [

    {path: "animateurs", component : AnimateursComponent},
    {path: "add-animateur", component : AddAnimateurComponent},
    {path: "updateAnimateur/:id", component: UpdateAnimateurComponent},
    {path: "rechercheParTv", component : RechercheParTvComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},

    {path: "", redirectTo: "animateurs", pathMatch: "full" }

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
