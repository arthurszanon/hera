import { Component } from '@angular/core';
import { CardInicialComponent } from './card-inicial/card-inicial.component';
import { MapsComponent } from "./maps/maps.component";
import { CarouselModelComponent } from "../product/carousel-model/carousel-model.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CardInicialComponent,
        MapsComponent,
        CarouselModelComponent,
        CommonModule
    ]
})
export class HomeComponent {

}
