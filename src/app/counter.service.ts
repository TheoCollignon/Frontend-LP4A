import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue= [12,6,78];
  constructor(private httpClient :HttpClient) { }
  url = 'https://lp4asgadot.herokuapp.com/counters/'
  url2 = 'https://lp4asgadot.herokuapp.com/counters.json'
  
  reset(){
    this.initialValue=[0,0,0];
  }
  /* increment(position: number) : number{
    this.initialValue[position]++;
    return this.initialValue[position];
  }*/
  increment(id:number): Observable<Counter>{
    return this.httpClient.patch<Counter>(this.url + id + '.json', {});
  }

  decrement(position: number): number{
    this.initialValue[position]--;
    return this.initialValue[position];
  }

  getCounter(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.url + id + '.json');
  }

  getCounters(): Observable<Counter[]> {
    return this.httpClient.get<Counter[]>(this.url2);
  }
}