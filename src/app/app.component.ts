import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './shared/GithubUser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  userInfo : IUser[];
  constructor(private http: HttpClient){
  }
  ngOnInit(){
    this.http.get<IUser>('http://api.github.com/users/Ethan0721').subscribe(
      data => {
         console.log(data);
         console.log(data.id);
      }
    );
  }
}
