import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import {FormsModule} from '@angular/forms'
import { ChangeborderDirective } from '../../directives/changeborder.directive';
import { ChangePipe } from "../../pipes/change.pipe";
import { ProserviceService } from '../../service/proservice.service';
import { Router } from '@angular/router';
import { ApiProductsService } from '../../service/api-products.service';


@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [FormsModule, CommonModule, ChangeborderDirective, ChangePipe]
})
export class ProductsComponent implements OnChanges,OnInit {
filtered:IProduct[]=[];
@Output() productslectedtobuy:EventEmitter<IProduct>;
@Input() recievedId:number=0; 
num:string="1234567891011125"
constructor(private staticProservice:ProserviceService,private router:Router
  ,private apiProducts:ApiProductsService
){
  this.productslectedtobuy=new EventEmitter<IProduct>;
  }
  ngOnChanges() {
    if(this.recievedId==0)
        {
          this.apiProducts.getAllProduct().subscribe(response=>{
            this.filtered=response;

          })
        }
        else{
          this.apiProducts.getProductByCatId(this.recievedId).subscribe(response=>{
            this.filtered=response})      }

  }
  ngOnInit() {
    this.apiProducts.getAllProduct().subscribe({
      next:(response)=>{   
           this.filtered=response
      },
      error:(err)=>{
        console.log("error")
      }
    })
  }

 reduce(p:IProduct) {

  p.quantity--;
  this.productslectedtobuy.emit(p);
  
}
showDetails(id:number){
  this.router.navigate(['/details',id])
}


}
