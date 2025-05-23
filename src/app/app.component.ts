import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageUrl = "https://img.freepik.com/premium-photo/computer-keyboard-sits-blue-table-with-cup-coffee-pencils_1064589-253999.jpg?ga=GA1.1.691238510.1743764675&semt=ais_country_boost&w=740"
  title = 'tepmForm';
  genderArry : Array<any> =[
    {gender1 :'male', id: 1 },
    {gender1 :'female', id: 2 }
  ]
@ViewChild('signUpForm') signUpForm !: NgForm


ngOnInit(): void {
  
}
 

  onSignUp(signUpForm: NgForm){
    
    console.log(signUpForm);
    
  }





  
}
