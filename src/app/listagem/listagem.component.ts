import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos:FotoComponent[] = []
  mensagem = new MensagemComponent()


  //injecao de dependencia fazendo inferencia de tipo
  constructor(private servico: FotoService) {
    servico.listar()
      .subscribe(
        fotosApi => {
          this.listaFotos = fotosApi
        }
      )
  }

  ngOnInit() { }

  remover(foto: FotoComponent) {

    this.servico.deletar(foto)
      .subscribe(
        mensagemApi => {
          
          this.mensagem = mensagemApi

          setTimeout(() => {
            this.mensagem = new MensagemComponent()  
          }, 3000);

          //Percorrer listaFotos
          this.listaFotos = this
                            .listaFotos
                            .filter(fotoLista => fotoLista != foto)
        }
        , erro => {
          console.log('erro ao apagar');

        }
      )
  }

}
