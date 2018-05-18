import { Component, Input } from "@angular/core";
import { UrlHandlingStrategy } from "@angular/router";

@Component({
    selector: 'foto',
    template: `<img [src]="url" alt="{{titulo}}" class="card-img-top">`,
    styles: [`
        .card-img-top {
            height: 240px;
            object-fit: cover;
        }
    `]
})
export class FotoComponent {
//one-way data binding
//associação de dados unidirecional
//{{}}  //angular expression

    @Input() titulo = ''
    @Input() url = ''
    descricao = ''
    _id = ''

}