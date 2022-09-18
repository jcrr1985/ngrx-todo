import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public API_GIFFY: string = '9LHjtb97O1DHLTyIy9v6nDXgm7NDgVow';
  public usersArray!: any[];

  get users(){
    return this.usersArray;
  }

  constructor(private http: HttpClient) { }

  addUser(payload: any) {
    return this.http.post('http://localhost:3000/users', payload).subscribe((newUser:any) => {
      this.usersArray = [...this.usersArray, newUser]
    })
  }

  getUsers() {
    return this.http.get('http://localhost:3000/users').subscribe((users:any) => {
      this.usersArray = users;
    })
  }

  deleteUser(id: any) {
    console.log('service id', id)
    return this.http.delete(`http://localhost:3000/users/${id}`).subscribe(deletedUser => {
      this.usersArray = this.usersArray.filter((user:any) => user._id != id)
    })
  }

  getUserById(id: string) {
    return this.http.get(`http://localhost:3000/users/${id}`)
  }

  //========================================================= GIFs METHODS ========================================================//

  searchGif(gifName: string) {
    const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=9LHjtb97O1DHLTyIy9v6nDXgm7NDgVow&q=${gifName}&limit=25&offset=0&rating=g&lang=en`
    return this.http.get(searchURL);
  }
}
