import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dependents } from 'src/app/modal/dependents';
import { MemberRegistrationService } from 'src/app/services/member-registration.service';

@Component({
  selector: 'app-memberdependents',
  templateUrl: './memberdependents.component.html',
  styleUrls: ['./memberdependents.component.css']
})
export class MemberdependentsComponent implements OnInit {

  memberId ='';
  constructor(private memberService : MemberRegistrationService,private route: ActivatedRoute) { }

  dependents : Dependents ={
    id : 0,
    name : '',
    count : 0,
    dob :new Date(1000, 0, 0, 0, 0, 0, 0),
    memberId : ''
  }
  ngOnInit(): void {
    this.memberId = this.route.snapshot.params['response'];
    console.log("Member Id : ", this.memberId);
    this.dependents.memberId=this.memberId;
  }
  saveDependents(depednts: Dependents){
    console.log("dependents :: ", depednts)
    this.memberService.saveDependents(depednts).subscribe(response => {
      alert("Successfully added Memebr in Record");
      console.log(response);
    }, error => {
      console.log(error);
    }
    )
  }

}
