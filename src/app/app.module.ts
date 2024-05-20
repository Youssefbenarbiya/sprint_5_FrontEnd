import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipesComponent } from './equipes/equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { FormsModule } from '@angular/forms';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParLigueComponent } from './recherche-par-ligue/recherche-par-ligue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeLiguesComponent } from './liste-ligues/liste-ligues.component';
import { UpdateLigueComponent } from './update-ligue/update-ligue.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    RechercheParLigueComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeLiguesComponent,
    UpdateLigueComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
