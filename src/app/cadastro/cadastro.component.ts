import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(private servico: FotoService
              , private rotaAtiva: ActivatedRoute
              , private roteador: Router){}

  ngOnInit(){

    this.rotaAtiva.params.subscribe(
        parametro => {

          if (parametro.fotoId){
              this.servico.consultar(parametro.fotoId)
                          .subscribe( 
                            fotoApi => this.foto = fotoApi
                          )
          }
        }
    )
  }

  salvar(){

    if(this.foto._id){
      this.servico.alterar(this.foto)
                  .subscribe(
                    () => {
                      console.log(`Foto ${this.foto.titulo} alterada com sucessoo!`);
                      this.roteador.navigate([''])
                    }
                  )
    }
    else {
      this.servico.cadastrar(this.foto)
                  .subscribe(
                    () => {
                      console.log(`Foto ${this.foto.titulo} cadastada com sucessoo!`);
                      this.foto = new FotoComponent()
                    }
                    ,erro => console.log(erro)
                  )
    }
  }
}