import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpclient:HttpClient) { }
getAllProduct():Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.StaticURL}/products`)
}

getProductById(id:string):Observable<IProduct>{
  return this.httpclient.get<IProduct>(`${environment.StaticURL}/products/${id}`)
}
getProductByCatId(catid:number):Observable<IProduct[]>{
  return this.httpclient.get<IProduct[]>(`${environment.StaticURL}/products/?catId=${catid}`)
}
addNewProduct(prd:IProduct):Observable<IProduct>{
  return this.httpclient.post<IProduct>(`${environment.StaticURL}/products`,JSON.stringify(prd))
}


}
