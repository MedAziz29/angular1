import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateursComponent } from './animateurs/animateurs.component';
import { AddAnimateurComponent } from './add-animateur/add-animateur.component';
import { UpdateAnimateurComponent } from './update-animateur/update-animateur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParTvComponent } from './recherche-par-tv/recherche-par-tv.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    AnimateursComponent,
    AddAnimateurComponent,
    UpdateAnimateurComponent,
    RechercheParTvComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
