import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Memberdependents } from '../modal/memberdependents';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DependentsService {

  getDependentsByMemberIdURL: string;
  getDependentByIdURL:string;
  constructor(private httpClient : HttpClient) { 
    this.getDependentsByMemberIdURL = "http://localhost:9092/getdependents";
    this.getDependentByIdURL = "http://localhost:9092/findependents";
  }
 

  getDependentsByMemberId(memberId: string): Observable<Memberdependents[]> {
    return this.httpClient.get<Memberdependents[]>(`${this.getDependentsByMemberIdURL}/${memberId}`);
  }
  getDependentById(id: number): Observable<any> {
    return this.httpClient.get(`${this.getDependentByIdURL}/${id}`);
  }
}
