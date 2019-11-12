import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeService } from '../../services/heroe.service'

@Component({
  selector: 'app-information-heroe',
  templateUrl: './information-heroe.component.html',
  styleUrls: ['./information-heroe.component.css']
})
export class InformationHeroeComponent implements OnInit {

  public HeroeFiltrado:any={};
  constructor(private ActivatedRouter:ActivatedRoute, private _HeroeService:HeroeService) {
    console.log("hola soy el constructor");
    const idHeroeURL=this.ActivatedRouter.snapshot.paramMap.get('id');
    this.HeroeFiltrado=this._HeroeService.BuscarHeroe(idHeroeURL);
    console.log(this.HeroeFiltrado);
   }

  ngOnInit() {
    console.log("Hola soy el Oninit");
  }

}
