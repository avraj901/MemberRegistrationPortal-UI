import { Component, OnInit } from '@angular/core';
import { Memberdependents } from 'src/app/modal/memberdependents';
import { DependentsService } from 'src/app/services/dependents.service';

@Component({
  selector: 'app-updatedependents',
  templateUrl: './updatedependents.component.html',
  styleUrls: ['./updatedependents.component.css']
})
export class UpdatedependentsComponent implements OnInit {

  dependentList: Memberdependents[] = [];
  dependent : Memberdependents = new Memberdependents();

  constructor(private dependentService : DependentsService) { }

  ngOnInit(): void {
    this.getDependentsByMemberId();
  }
  getDependentsByMemberId(){
    this.dependentService.getDependentsByMemberId('R-261').subscribe(data => {
      console.log(data);
      this.dependentList = data;
    }, error => console.log(error));
  }
  editDependent(id: number){
    this.dependentService.getDependentById(id).subscribe(data =>{
      console.log(data);
      this.dependent = data;
    }, error => console.log(error)
    )
  }
  deleteDependent(id: number){

  }
  updateDependent(dependent: Memberdependents,id: number){

  }
}
