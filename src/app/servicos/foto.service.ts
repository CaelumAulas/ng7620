import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { map, catchError } from 'rxjs/operators'
import { MensagemComponent } from "../mensagem/mensagem.component";


@Injectable()
export class FotoService {

    url = 'http://localhost:3000/v1/fotos/'

    cabecalho = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private conexaoApi: HttpClient) { }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.post(this.url, foto, this.cabecalho)
            .pipe(
                map(() => {
                    let mensagem = new MensagemComponent()

                    mensagem.texto = `Foto ${foto.titulo} cadastrada com sucesso!`
                    mensagem.tipo = 'success'

                    return mensagem
                })
            )
    }

    deletar(foto: FotoComponent) {
        return this.conexaoApi.delete(this.url + foto._id)
                            .pipe(
                                map(() => {
                                    let mensagem = new MensagemComponent()

                                    mensagem.texto = `Foto ${foto.titulo} apagada com sucesso!`
                                    mensagem.tipo = 'success'

                                    return mensagem
                                })
                            )
    }

    consultar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url + fotoId)
    }

    alterar(foto: FotoComponent): Observable<Object> {
        return this.conexaoApi.put(this.url + foto._id
            , foto
            , this.cabecalho
        )
        .pipe(
            map(() => {
                let mensagem = new MensagemComponent()

                mensagem.texto = `Foto ${foto.titulo} alterada com sucesso!`
                mensagem.tipo = 'success'

                return mensagem
            })
        )
    }

}