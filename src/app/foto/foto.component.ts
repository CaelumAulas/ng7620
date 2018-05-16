import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: `<img [src]="url" alt="{{titulo}}" class="img-fluid d-block mx-auto">`
})
export class FotoComponent {
//one-way data binding
//associação de dados unidirecional
//{{}}  //angular expression

    @Input() titulo = ''
    @Input() url = ''

}