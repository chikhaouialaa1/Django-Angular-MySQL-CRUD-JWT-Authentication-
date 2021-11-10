import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private URL = 'http://127.0.0.1:8000/agents';
  
  constructor(private http: HttpClient) { }

  getAgetns() {
    return this.http.get<any>(this.URL + '/listviews/');
  }

  createAgents(agent:any){
    return this.http.post<any>(this.URL + '/listviews/',agent)
  }

  deleteField(id:string){
    console.log(this.URL+'/listviews/' + id + '/')
    return this.http.delete(this.URL+'/listviews/' + id+ '/').subscribe(() => console.log ('Delete successful'))
  }

  updateField(agent:any,id:string){
    console.log(this.URL+'/listviews/' + id + '/')
    return this.http.put(this.URL+'/listviews/' + id+ '/',agent).subscribe(() => console.log ('updated successful'))
  }

 
}
