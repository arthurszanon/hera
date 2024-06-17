import { Component, input, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-inicial-adm',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './card-inicial-adm.component.html',
  styleUrl: './card-inicial-adm.component.css'
})
export class CardInicialAdmComponent implements OnInit{

  cardForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cardForm = this.fb.group({
      preTituloUm: ['', Validators.required],
      tituloUm: ['', Validators.required],
      botaoUm: ['', Validators.required],
      preTituloDois: ['', Validators.required],
      tituloDois: ['', Validators.required],
      botaoDois: ['', Validators.required],
    });
  }




  value: string | undefined;
  loading: boolean = false;

  momentForm!: FormGroup;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  submit(){
    console.log('Alterações Realizadas')
  }
}
