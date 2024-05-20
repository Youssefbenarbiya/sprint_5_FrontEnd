import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  
})
export class EquipesComponent implements OnInit{

  equipes? : Equipe[];

  constructor(private equipeService:EquipeService,public authService: AuthService){
      
    }
  ngOnInit():void{
    //this.equipes = this.equipeService.listeEquipes();
   /* this.equipeService.listeEquipes().subscribe(eqpes => {
      console.log(eqpes);
      this.equipes = eqpes;
      });*/

      this.chargerEquipes();

  }

  chargerEquipes(){
    this.equipeService.listeEquipes().subscribe(prods => {
    console.log(prods);
    this.equipes = prods;
    });
    }
    supprimerEquipe(p: Equipe)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.equipeService.supprimerEquipe(p.idEquipe).subscribe(() => {
    console.log("equipe supprimé");
    this.chargerEquipes();
    });
    }

}
