import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    DialogModule,
    InputMaskModule,
    FloatLabelModule,
    RadioButtonModule,
    NgFor
  ],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.css'
})
export class HomeAdmComponent implements OnInit{
  value: string | undefined;
  selectedCategory: any = null;

    categories: any[] = [
        { name: 'Interior', key: 'A' },
        { name: 'Especial Cidade', key: 'M' },
        { name: 'Região Metropolitan', key: 'P' },
        { name: 'Especial Interior', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}
