import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Claim } from '../modal/claim';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private httpClient : HttpClient) { }

  createClaim(claim: Claim): Observable<Object> {
   
    return this.httpClient.post<Claim>("http://localhost:9092/createClaim", claim);
  }

  createClaimForDependent(dependentclaim: Claim): Observable<Object> {

    return this.httpClient.post<Claim>("http://localhost:9092/dependentclaim",dependentclaim);
  }

}
