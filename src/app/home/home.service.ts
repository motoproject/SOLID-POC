import { Injectable } from '@angular/core';
import { HttpBaseService } from '../HttpBaseService';
import { Observable } from 'rxjs';

// Single Responsibiliy & Open-Closed Principal OR Liskov Subsitution Principal
@Injectable()
export class HomeService extends HttpBaseService {

productsIdList: any;
apiURL: string;
data: any;
responseMessage: any;

getListOfPRoducts() {
  this.apiURL = '';
  this.productsIdList = super.get(this.apiURL);

  // this.productsIdList = [];
  // for (let i = 0; i < 10; i++) {
  //   this.productsIdList.push({
  //     'ProductID': i
  //   });
  // }
  // return this.productsIdList;
}

postUpdateProductList() {
  this.data = [];
  this.responseMessage = super.post(this.apiURL, this.data);
}

}
