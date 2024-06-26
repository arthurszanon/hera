import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeAdmComponent } from './components/adm/home-adm/home-adm.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { ArmarinhoComponent } from './components/armarinho/armarinho.component';
import { MatconComponent } from './components/matcon/matcon.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesCadastradosComponent } from './components/clientes-cadastrados/clientes-cadastrados.component';
import { ShopComponent } from './components/shop/shop.component';
import {AuthGuard} from './guard/auth.guard';
import {CadastroComponent} from './components/cadastro/cadastro.component';
import { ClientesAdmComponent } from './components/adm/clientes-adm/clientes-adm.component';
import { ImagensAdmComponent } from './components/adm/imagens-adm/imagens-adm.component';


export const routes: Routes = [
  {
      path:"",
      component: HomeComponent
  },
  {
      path:"produto/:id",
      component: ProductPageComponent
  },
  {
      path:"adm",
      component: HomeAdmComponent,
      canActivate: [AuthGuard]
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
    path:"cadastro",
    component: CadastroComponent,
    canActivate: [AuthGuard]
  },
  {
      path:"clientes-cadastrados",
      component: ClientesCadastradosComponent,
      canActivate: [AuthGuard]
  },
  {
      path: "shop",
      component: ShopComponent
  },
  {
    path: "clientes-adm",
    component: ClientesAdmComponent
},
{
    path: "imagens-adm",
    component: ImagensAdmComponent
},
];
