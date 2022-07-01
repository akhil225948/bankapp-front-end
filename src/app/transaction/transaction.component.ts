import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions:any
  acno=JSON.parse(localStorage.getItem("currentAcno")||'')

  constructor(private ds:DataService) {
    this.transactions = this.ds.getTransaction(this.acno)
    console.log(this.transactions);
    
   }

  ngOnInit(): void {
  }

}
