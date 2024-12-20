import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  //this service return the job which api do
  getAllProducts() {
    return this.http.get(environment.apiUrl + 'products')
  }

  getAllCategories() {
    return this.http.get(environment.apiUrl + 'products/categories')
  }


  getProductsByCategory(keyword: string) {
    return this.http.get(environment.apiUrl + 'products/category/' + keyword)
  }


  getProductById(id: any) {
    return this.http.get(environment.apiUrl + 'products/' + id)
  }


}
