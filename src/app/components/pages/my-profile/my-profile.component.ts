import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  name:string = localStorage.getItem('name')
  email:string = localStorage.getItem('email')
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit() {
    
  }
  Edit(name: string, email: string) {
    this.userService.Edit(this.name, this.email).subscribe((data) => {
      console.log(data);
    });
  }
  Delete() {
    this.userService.Delete(this.email).subscribe(() => {
      this.router.navigate(['sign-up']);
    });
  }
}
