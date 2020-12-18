import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  moedas: any;  

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
   const usd = this.activatedRoute.snapshot.paramMap.get('USD-BRL,CAD-BRL');
   this.http.get(`https://economia.awesomeapi.com.br/all${usd}`).subscribe(res => {
    this.moedas = res;
   });
  } 

} 
