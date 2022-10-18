import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/modal/claim';
import { Existingmember } from 'src/app/modal/existingmember';
import { Member } from 'src/app/modal/member';
import { ClaimService } from 'src/app/services/claim.service';
import { MemberRegistrationService } from 'src/app/services/member-registration.service';

@Component({
  selector: 'app-cliams',
  templateUrl: './cliams.component.html',
  styleUrls: ['./cliams.component.css']
})
export class CliamsComponent implements OnInit {

  memberList: Array<any> = [];
  savedmember: Existingmember = new Existingmember();
  claim: Claim = new Claim();
  isDisabled: boolean = true;
  constructor(private memberService: MemberRegistrationService, private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getMemberByMemberId();
  }
  createClaim(claim: Claim) {
    this.claimService.createClaim(claim).subscribe(data => {
      console.log(data);
      alert("Claim applied successfully..!")
    })
  }
  applyforClaim(id: number) {
    this.memberService.getMemberById(id).subscribe(data => {
      console.log(data);
      this.savedmember = data;
      this.claim.dob = this.savedmember.dob;
      this.claim.memberId = this.savedmember.memberId;
      this.claim.memberName = this.savedmember.name;
      console.log("Date of Birth", this.claim.dob);
    }, error => console.log(error));
  }
  getMemberByMemberId() {
    this.memberService.getMemberByMemberId('R-261').subscribe(data => {
      console.log(data);
      this.memberList.push(data);
    }, error => console.log(error));
  }

}
