import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyApiService } from '../../service/currency-api.service';
import { Currency } from '../../dtos/ICurrency'
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  public currencies: Currency[] = [];
  public newCurrency: Currency[] = [];

  constructor(private currencyApi: CurrencyApiService) { }

  ngOnInit() {
    this.callLoadCurrencies();
    this.defaultValues();
  }

  async callLoadCurrencies() {
    await this.currencyApi.loadCurrencies()
      .then(response =>  {
        this.currencies = Object.keys(response)
          .map(e => response[e]);
      });
  }
} 
