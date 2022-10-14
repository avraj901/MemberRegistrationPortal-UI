import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/modal/customer';
import { Member } from 'src/app/modal/member';
import { MemberRegistrationService } from 'src/app/services/member-registration.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  member: Member = new Member();
  memberForm!: FormGroup;
  submitted = false;
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
 

  Country: Country[] = [];
  City: City[] = [];

  cpass:string=''
  customer:Customer={
    id:0,
    name:'',
    emailAddress:'',
    contactNumber:'',
    address:'',
    dob:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:'',
    panNumber: '',
    country: '',
    state: ''

  }
 
  constructor(private memberService: MemberRegistrationService,
    private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      username: ['', Validators.required]
     
      
    });
  }
  get f() { return this.memberForm.controls; }

  saveMember(member: Member) {
     this.submitted = true;
    if (this.memberForm.invalid) {
      return;
    }

    this.memberService.saveMember(member).subscribe(response => {
      alert("Successfully added Memebr in Record");
      console.log(response);
    }, error => {
      console.log(error);
    }
    )
  }
  saveCust(cust:Customer,pass:string){
    console.log('customer data',cust);
    this.memberService.saveMember(cust).subscribe(response => {
      alert("Successfully added Memebr in Record");
      console.log(response);
      this.router.navigate(['dependents',response]);
    }, error => {
      console.log(error);
     
      //this.router.navigate(['details', id])
    }
    )
  }
  getCountry() {
    this.Country.push({ Id: 1, name: "India" }, { Id: 2, name: "Australia" });
    console.log("counrty");
    console.log(this.Country);
  }
  getCity(event: any) {
    this.City = [];
    var countryName = event.target.value;
    if (countryName == 'India') {
      this.City.push({ cityId: 1, name: "Surat" }, { cityId: 2, name: "Navsari" }, { cityId: 3, name: "Ahemdabad" });
    } else if (countryName == 'Australia') {
      this.City.push({ cityId: 1, name: "Sydney" }, { cityId: 2, name: "Gold Cost" }, { cityId: 3, name: "Darwin" });
    }
  }
}
interface Country {
  Id: number;
  name: string;
}
interface City {
  cityId: number;
  name: string;
}