import { Component, OnInit } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { Tv } from '../model/tv.model';
import { AnimateurService } from '../services/animateur.service';

@Component({
  selector: 'app-recherche-par-tv',
  templateUrl: './recherche-par-tv.component.html',
  styleUrls: ['./recherche-par-tv.component.css']
})
export class RechercheParTvComponent implements OnInit {
  animateurs! : Animateur[];
  IdTv! : number;
  tvs! : Tv[];
  
  constructor(private animateurService: AnimateurService) { }

  ngOnInit(): void {
    this.animateurService.listeTvs().
subscribe(ts => {this.tvs =ts._embedded.tvs;
console.log(ts);
});
  }
  onChange() {
    this.animateurService.rechercherParTv(this.IdTv).
    subscribe(anims =>{this.animateurs=anims});
    }
}
