import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listaFotos:FotoComponent[] = []

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
        resposta => {
          console.log(`Foto ${foto.titulo} apagada com sucesso`);

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
