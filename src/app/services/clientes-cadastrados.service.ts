import { Injectable } from '@angular/core';
    
@Injectable()
export class ClientesCadastradosService {
    getClientesData() {
        return [
            {
                id: 1,
                nome: 'Maurício',
                tabela: 'Interior',
                representante: 'Kléber',
            },
            {
                id: 2,
                nome: 'Renato',
                tabela: 'Cidade',
                representante: 'Henrique',
            },
            {
                id: 3,
                nome: 'Julio',
                tabela: 'Interior',
                representante: 'Mathias',
            },
            {
                id: 4,
                nome: 'Sergio',
                tabela: 'Cidade Especial',
                representante: 'Felipe',
            },
            {
                id: 5,
                nome: 'Igor',
                tabela: 'Interior Especial',
                representante: 'Bruno',
            },
            {
                id: 6,
                nome: 'Jean',
                tabela: 'Cidade Especial',
                representante: 'Jorge',
            },
            {
                id: 7,
                nome: 'Danilo',
                tabela: 'Interior',
                representante: 'Gabriel',
            },
            {
                id: 8,
                nome: 'Rodrigo',
                tabela: 'Cidade',
                representante: 'Fernando',
            },
            {
                id: 9,
                nome: 'Rafael',
                tabela: 'Interior',
                representante: 'Tadeu',
            },
            {
                id: 10,
                nome: 'David',
                tabela: 'Cidade',
                representante: 'Arthur',
            },

        ]
}

  getClientsMini() {
    return Promise.resolve(this.getClientesData().slice(0,5));
  }
}