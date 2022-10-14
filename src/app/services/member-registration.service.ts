import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../modal/member';
import { Observable } from 'rxjs';
import { Dependents } from '../modal/dependents';
import { Customer } from '../modal/customer';

@Injectable({
  providedIn: 'root'
})
export class MemberRegistrationService {

  getCustomerByMemberIdURL: string;
  getCustomrByIdURL: string;
  updateMemberURL: string;
  constructor(public httpCLient: HttpClient) {
    this.getCustomerByMemberIdURL = "http://localhost:9092/getcustomer";
    this.getCustomrByIdURL = "http://localhost:9092/findcustomer";
    this.updateMemberURL = "http://localhost:9092/updatecustomer";
  }

  saveMember(member: Member): Observable<Object> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    return this.httpCLient.post<Member>("http://localhost:9092/savecustomer", member, requestOptions);
  }
  saveDependents(dependents: Dependents): Observable<any> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    return this.httpCLient.post<Dependents>("http://localhost:9092/savedependent", dependents, requestOptions);
  }
  getMemberByMemberId(memberId: string): Observable<Member[]> {
    return this.httpCLient.get<Member[]>(`${this.getCustomerByMemberIdURL}/${memberId}`);
  }
  getMemberById(id: number): Observable<any> {
    return this.httpCLient.get(`${this.getCustomrByIdURL}/${id}`);
  }
  updateMember(member: Member, id: number) {
    return this.httpCLient.put(`${this.updateMemberURL}/${id}`, member);
  }
}
