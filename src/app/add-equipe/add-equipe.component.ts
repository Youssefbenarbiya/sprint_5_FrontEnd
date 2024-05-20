import { Component } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Ligue } from '../model/ligue.model';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
})
export class AddEquipeComponent {
  ligues! : Ligue[];
  newIdLigue! : number;
  newLigue! : Ligue;
  newEquipe = new Equipe();
  ajouterAvecSucces = false;
  constructor(private equipeService:EquipeService,private router :Router) { 

  }

  ngOnInit(): void {
  this.equipeService.listeLigues().subscribe(ligs => {this.ligues = ligs._embedded.ligues;
    console.log(ligs);});
  }


 addEquipe(){
  this.newEquipe.ligue = this.ligues.find(lig => lig.idLigue == this.newIdLigue)!;
  this.equipeService.ajouterEquipe(this.newEquipe)
  .subscribe(eqip => {
  console.log(eqip);
  this.router.navigate(['equipes']);
  });
  }

  
}
