import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements AfterViewInit {
  selectedId:number=0;
  categories:ICategory[];
  products:IProduct [] =[];
  totalprice:number=0;
  count:number=0;
  @ViewChild(ProductsComponent) Productscomp!:ProductsComponent

myDataArray: any;

ngAfterViewInit(): void {
  console.log(this.Productscomp)
}
constructor(){
  this.categories=[
    {id:1,name:"cars"},
    {id:2,name:"bikes"},
    {id:3,name:"air craft"}
  ]
}
Insertprd(prd:IProduct)
{

this.products.push(prd);
this.totalprice+=prd.price;

}
}
