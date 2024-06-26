import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { ClientesCadastradosService } from '../../services/clientes-cadastrados.service';
import { clientes_cadastrados } from '../../interfaces/clientes-cadastrados';
import { TreeNode } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-clientes-cadastrados',
  standalone: true,
  imports: [TreeTableModule, ButtonModule, CommonModule, ],
  templateUrl: './clientes-cadastrados.component.html',
  styleUrl: './clientes-cadastrados.component.css',
  providers: [ClientesCadastradosService]
})
export class ClientesCadastradosComponent {

}
