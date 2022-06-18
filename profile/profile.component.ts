import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SlideInOutAnimation } from './animations';
import { RefreshPageService } from '../refresh-page.service';
import { CookieService } from 'ngx-cookie';
export interface Tile {
  title: string;
  cols: number;
  rows: number;
  color: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [SlideInOutAnimation]

})

export class ProfileComponent implements OnInit {
  user = null;
  user_string = '';
  animation_state1 = "out";
  animation_state2 = "out";

  shown_sports_tiles: Tile[] = [
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },   
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },   
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },   

  ];
  hidden_sports_tiles: Tile[] = [
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },
    
    { title: 'Rubrix Cube', cols: 2, rows: 1, color: '../../assets/certificates/Rubrix_200_230_45_Helvetica.jpg' },   
      ];

      constructor(@Inject(DOCUMENT) private document: Document, private cookieService: CookieService, private refreshPageService: RefreshPageService){}
      loginHref = "https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=13leStzGZlsbAqkY7mby3AFIueoR3HtbAIdfAZ54&response_type=code&scope=basic profile program ldap insti_address sex&redirect_uri=http://localhost:8080/api/login";
      ngOnInit(){
        
        this.user =JSON.parse(localStorage.getItem('user-data'));
        this.user_string = localStorage.getItem('user-data');
        if(!this.user){
    
          let sessionID = this.cookieService.get("mysesCookie").split(":")[1].split(".")[0];
         //console.log(sessionID);
          if(sessionID != undefined){
            this.user = this.refreshPageService.getUserData(sessionID).subscribe((data)=>{
              this.user = data;
              this.user_string = JSON.stringify(this.user);
              console.log(this.user);
              if(data != undefined && data != {})
              localStorage.setItem('user-data', JSON.stringify(this.user));
              Response.redirect("https://localhost:4200")
            });
            (error)=>{
              console.log("failied login:", error);
            }
          }
        }
        else{
        console.log("from localstorage");
        console.log(this.user);}
      }
    
  myfunc(id: String) {
    if (id === 'toggle_button1') {
      this.animation_state1 = this.animation_state1 === 'in' ? 'out' : 'in';
      if (this.animation_state1 == 'in') document.getElementById('toggle_button1').innerHTML = "Show Less";
      else document.getElementById("toggle_button1").innerHTML = 'Show More';
    }
    if (id === 'toggle_button2') {
      this.animation_state2 = this.animation_state2 === 'in' ? 'out' : 'in';
      if (this.animation_state2 == 'in') document.getElementById('toggle_button2').innerHTML = "Show Less";
      else document.getElementById("toggle_button2").innerHTML = 'Show More';
    }
  
  this.ngOnInit(); void {
  }

}

}
