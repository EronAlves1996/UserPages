import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {

  constructor() { }

  retrieveAllUsers(): User[]{
    return USERS;
  }

  retrieveUser(userEmail: string): User{
    return USERS.find(n=>n.email === userEmail) as User;
  }

  addUser(user: User): void{
    USERS.push(user);
  }

  deleteUser(userEmail: string): void{
    USERS.splice(USERS.findIndex(n => n.email === userEmail), 1);
  }

  editUser(user: User, userEmail: string): void{
    USERS[USERS.findIndex(n=>n.email === userEmail)] = user;
  }
}

let USERS: User[] = [
  new User(
    "Patricia Boyle",
    "patriciab@zillum.com",
    "../../assets/img/pboyle.jpg",
    "patricia.boyle@mail.workcorp.com"
    ),
  new User(
    "Edwig Harland",
    "eddyharlandtheman@ymail.com",
    "../../assets/img/eharland.jpg"
  ),
  new User(
    "Erika Melman",
    "melmangirl@themailprovider.com",
    "../../assets/img/emelman.jpg"
  ),
  new User(
    "Farush Kannah",
    "farush@googles.com",
    "../../assets/img/fkannah.jpeg",
    "kannah.farush@cap.scom.com"
  ),
  new User(
    "Jenna Cloesman",
    "littlejennah@simplemail.com",
    "../../assets/img/jcloesman.jpeg",
  ),
  new User(
    "John Newman",
    "newmansnew@theglobe.com",
    "../../assets/img/jnewman.jpg"
  )
]
