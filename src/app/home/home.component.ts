import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersList: any = {};
  userNameInput = '';
  userLocationInput = '';
  userJobInput = '';
  selectedUser: User;
  submitMessage = '';
  submitFlag = false;

  constructor(private userService: UserService, private userObject: User) { }

  ngOnInit() {
    // GET
    this.userService.getUsers().subscribe((observer) => {
      this.usersList = observer;
    });
  }

  // POST
  submitDetails() {
      this.userObject = {
        'name': this.userNameInput,
        'job': this.userJobInput,
        'location': this.userLocationInput
      };
    this.userService.postUsers(this.userObject).subscribe((observer) => {
      console.log(observer);
      this.submitFlag = true;
      this.submitMessage = 'Details submitted!';
    },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

  // DELETE
  deleteUserFromList(userId) {
    this.userService.deleteUser(userId).subscribe((observer) => console.log(observer));
  }

  // PUT
  saveUserDetails(userId) {
    this.userObject = {
      'name': this.selectedUser.name,
      'job': this.selectedUser.job,
      'location': this.selectedUser.location
    };
    this.userService.updateUser(userId, this.userObject).subscribe();
  }

  // to highlight the selected user from the table
  selectedRow(user: User) {
    this.selectedUser = user;
  }
}
