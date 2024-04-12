import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../service/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categories:ICategory[];
  product:IProduct={} as IProduct

  constructor(private apiproducts:ApiProductsService,private router:Router){
    this.categories=[
      {id:1,name:"cars"},
      {id:2,name:"bikes"},
      {id:3,name:"air craft"}
    ]
  }
add(){
  this.apiproducts.addNewProduct(this.product).subscribe({
    next:()=>{
      this.router.navigateByUrl('/cart')
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

}
