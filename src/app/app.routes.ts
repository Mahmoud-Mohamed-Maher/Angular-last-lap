import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContactusComponent } from './Component/contactus/contactus.component';
import { CategoryComponent } from './Component/category/category.component';
import { ProductsComponent } from './Component/products/products.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { DetailsComponent } from './Component/details/details.component';
import { AddProductComponent } from './Component/add-product/add-product.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'About',component:AboutusComponent},
    {path:'products',component:ProductsComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactusComponent},
    {path:'cart',component:CategoryComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'add',component:AddProductComponent},

    {path:'**',component:NotfoundComponent}
];
