import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  constructor() { }
  getImagemData() {
    return [
        {
            id: '1',
            url: 'Maurício',
            descricao: 'Interior',
            primaria: true,
        },
        {
          id: '2',
          url: 'Maurício',
          descricao: 'Interior',
          primaria: true,
        },
        {
          id: '3',
          url: 'Maurício',
          descricao: 'Interior',
          primaria: true,
        },
        {
          id: '4',
          url: 'Maurício',
          descricao: 'Interior',
          primaria: true,
      },
        {
          id: '5',
          url: 'Maurício',
          descricao: 'Interior',
          primaria: true,
        },
        {
          id: '6',
          url: 'Maurício',
          descricao: 'Interior',
          primaria: true,
        }
    ]
}
}
