import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()
  mensagem = new MensagemComponent()

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
                      this.mensagem.texto = `Foto ${this.foto.titulo} alterada com sucessoo!`
                      this.mensagem.tipo = "success"

                      console.log(this.roteador);
                      

                      setTimeout(() => {
                        this.roteador.navigate([''])
                      }, 3000);
                      
                    }
                  )
    }
    else {
      this.servico.cadastrar(this.foto)
                  .subscribe(
                    mensagemApi => {
                      this.mensagem = mensagemApi
                      this.foto = new FotoComponent()
                    }
                    ,mensagemErro => {
                      this.mensagem = mensagemErro
                      console.log(mensagemErro);
                      
                    }
                  )
    }
  }
}