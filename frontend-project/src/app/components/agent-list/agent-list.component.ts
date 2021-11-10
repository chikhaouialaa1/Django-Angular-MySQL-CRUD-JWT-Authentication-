import { Component, OnInit } from '@angular/core';
import {AgentService} from '../../services/agent.service'
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  agents = [];

  agentForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    age: '',
  });

  updatusername=''
  updatlastname=''
  updatuserage=''
  updatbuttom=''
  private id =''
  


  constructor( private agentService : AgentService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.agentService.getAgetns()
    .subscribe(
      res => {
        this.agents = res;
        console.log(this.agents)
      },
      err => console.log(err)
    )

    this.updatusername='firstname'
    this.updatlastname='lastname'
    this.updatuserage='age'
    this.updatbuttom="NEW"

  }

  addAgent(){

    if(this.updatbuttom==="NEW"){
    this.agentService.createAgents(this.agentForm.value).subscribe(()=>{
      console.log("added succeffuly")
      window.location.reload()
    })
    }
    else{
      console.log("update user")
      console.log(this.agentForm.value,this.agentForm.value.id)
      
      this.agentService.updateField(this.agentForm.value,this.id)
      window.location.reload()
    }
    
  }

  deleteField(id:string){
    console.log(id)
    this.agentService.deleteField(id);
    window.location.reload()
  }; 

  
  updateField(agent:any){
    console.log(agent.id)
    console.log(agent)
    
    this.updatusername=agent.first_name;
    this.updatlastname=agent.last_name;
    this.updatuserage=agent.age;

    this.updatbuttom="UPDATE"
    this.id=agent.id
    
    //this.agentService.deleteField(id);
    //window.location.reload()
  }; 
 
 

}
