import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { MgmtServiceService } from 'src/app/service/mgmt-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

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

  addProduct(){
    this.route.navigateByUrl("/addProduct")
  }


}
