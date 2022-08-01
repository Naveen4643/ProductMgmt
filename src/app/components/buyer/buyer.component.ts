import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  products: Product[] 

  constructor(private service:MgmtServiceService,
              private route:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  
  getAllProducts(){
    this.service.getAllProducts().subscribe(data=>{console.log(data);
    this.products=data;
  })
}  

}
