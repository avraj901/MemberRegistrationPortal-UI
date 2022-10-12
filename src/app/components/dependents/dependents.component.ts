import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modal/customer';
import { Member } from 'src/app/modal/member';
import { MemberRegistrationService } from 'src/app/services/member-registration.service';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.css']
})
export class DependentsComponent implements OnInit {

  memberList: Array<any> = [];
  member : Member = new Member();
  constructor(private memberService: MemberRegistrationService) { }

  ngOnInit(): void {
   this.getMemberByMemberId();
  }
  deleteMember(id: number) {

  }
  editMember(id : number){
    this.memberService.getMemberById(id).subscribe(data =>{
      console.log(data);
      this.member = data;
    }, error => console.log(error)
    )
  }

  updateMember(member : Member,id : number){
    this.memberService.updateMember(member,id).subscribe(data => {
      console.log(data);
      this.getMemberByMemberId();
      alert("Student daetails updated successfully");
    })
  }

  getMemberByMemberId(){
    this.memberService.getMemberByMemberId('R-261').subscribe(data => {
      console.log(data);
      this.memberList.push(data);
    }, error => console.log(error));
  }
}


