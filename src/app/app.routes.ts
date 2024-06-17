import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeAdmComponent } from './components/adm/home-adm/home-adm.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { ArmarinhoComponent } from './components/armarinho/armarinho.component';
import { MatconComponent } from './components/matcon/matcon.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesCadastradosComponent } from './components/clientes-cadastrados/clientes-cadastrados.component';
import { ShopComponent } from './components/shop/shop.component';


export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"product/:id",
        component: ProductPageComponent
    },
    {
        path:"adm",
        component: HomeAdmComponent
    },
    {
        path:"armarinho",
        component: ArmarinhoComponent
    },
    {
        path:"matcon",
        component: MatconComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"clientes-cadastrados",
        component: ClientesCadastradosComponent
    },
    {
        path: "shop",
        component: ShopComponent
    },
];
