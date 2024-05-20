import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Ligue } from '../model/ligue.model';
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
})
export class UpdateEquipeComponent implements OnInit{
  currentEquipe = new Equipe();
  ligues! : Ligue[];
  updatedLigID! : number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private equipeService: EquipeService) { 
  }
  ngOnInit(): void {
   // this.ligues = this.equipeService.listeLigues();
    //this.currentEquipe = this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params['id']);
   // this.updatedLigID = this.currentEquipe.ligue.idLigue!;
   this.equipeService.listeLigues().
   subscribe(ligs => {this.ligues = ligs._embedded.ligues;
   console.log(ligs);
   });
    this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params['id']).subscribe( eqip =>{ this.currentEquipe = eqip; 
      this.updatedLigID = this.currentEquipe.ligue.idLigue
    } ) ;
  
  
  }
  updateEquipe(){
    this.currentEquipe.ligue = this.ligues.
find(lig => lig.idLigue == this.updatedLigID)!;
    this.equipeService.updateEquipe(this.currentEquipe).subscribe(e => {
      this.router.navigate(['equipes']); }
      );
  }
}
