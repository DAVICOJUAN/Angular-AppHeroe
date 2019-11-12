import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService} from '../../services/heroe.service';
@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string ="";
  public heroesFiltrados: any = {}
  public loading:boolean=true;
  constructor(private ActivatedRoute:ActivatedRoute, private _heroeService:HeroeService) { 
    this.ActivatedRoute.params.subscribe((terminoURL)=>{this.termino=terminoURL.termino

      this.termino=terminoURL.termino
      console.log(this.termino)

      this.heroesFiltrados=this._heroeService.buscarHeroes(this.termino);
      this.loading=false;
      console.log(this.heroesFiltrados)
      
    })
  }

  ngOnInit() {
  }

}
