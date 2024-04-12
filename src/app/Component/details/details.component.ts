import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProserviceService } from '../../service/proservice.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../service/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
productId!:string;
product:IProduct|undefined= {}  as IProduct;
prodctsIds:string[]=[]
  constructor(private activatedrout:ActivatedRoute,
    private proservice:ProserviceService,
  private router:Router
,private location:Location
,private apiproducts:ApiProductsService)
  {

  } 
ngOnInit(): void {
this.activatedrout.paramMap.subscribe((pm)=>{
  this.productId=pm.get('id')!

  this.apiproducts.getProductById(this.productId).subscribe({
next:(response)=>{
  this.product=response
},
error:(err)=>{
  console.log(err)
}

  })
})

  
  this.apiproducts.getAllProduct().subscribe({
next:(response)=>{
  this.prodctsIds=response.map(prd=>String(prd.id))
},
error:(err)=>{
  console.log(err)
}

  })
}


next()
{
let index =this.prodctsIds.findIndex(id=>id==this.productId)
if (index !== -1 && index < this.prodctsIds.length - 1) {
  this.router.navigate(['/details', this.prodctsIds[index + 1]]);
}
}
prev()
{
  let index =this.prodctsIds.findIndex(id=>id==this.productId)

  if (index !== -1 && index > 0) {
    this.router.navigate(['/details', this.prodctsIds[index - 1]]);
  }
}
back(){
  this.location.back()
}



}


