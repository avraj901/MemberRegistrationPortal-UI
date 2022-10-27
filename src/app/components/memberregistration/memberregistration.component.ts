import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberregistration',
  templateUrl: './memberregistration.component.html',
  styleUrls: ['./memberregistration.component.css']
})
export class MemberregistrationComponent implements OnInit {

  submitted = false;
  employeeForm!: FormGroup;
  Country: Country[] = [];
  City: City[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      Name:['',[Validators.required,Validators.maxLength(5),Validators.pattern('^[a-zA-Z ]*$')]],
      DOB:['',Validators.required],
      PhoneNo:['',Validators.compose([Validators.required,Validators.pattern('[0-9+]*'),Validators.minLength(10)])],
      Address:['',Validators.required],
      EmailId:['',Validators.compose([Validators.required, Validators.email,Validators.pattern('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$')])],
      Country:['',Validators.required],
      City:['',Validators.required],
      Password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    });
    this.getCountry();
  }

  getCountry() {
    this.Country.push({ Id: 1, name: "India" }, { Id: 2, name: "Australia" });
    console.log("counrty");
    console.log(this.Country);
  }
  get loadRegistration() {
    return this.employeeForm?.controls;
  }
  getCity(event: any) {
    this.City = [];
    var countryName = event.target.value;
    if (countryName == 'India') {
      this.City.push({ cityId: 1, name: "Surat" }, { cityId: 2, name: "UP" }, { cityId: 3, name: "Ahemdabad" });
    } else if (countryName == 'Australia') {
      this.City.push({ cityId: 1, name: "Sydney" }, { cityId: 2, name: "Gold Cost" }, { cityId: 3, name: "Darwin" });
    }
  }
  onSubmit() {
    this.submitted = true;
    console.log('Form value',this.employeeForm.value);
    if (this.employeeForm.valid) {
      
      this.router.navigate(['DashBoard']);
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