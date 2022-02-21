import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, email: 'test@test.com', password: 'test', username: '1', age: '', friends: [], games: []},
      {id: 2, email: 'test1@test.com', password: 'test', username: '2', age: '', friends: [], games: []},
      {id: 3, email: 'test2@test.com', password: 'test', username: '3', age: '', friends: [], games: []},
      {id: 4, email: 'test3@test.com', password: 'test', username: '4', age: '', friends: [], games: []},
      {id: 5, email: 'test4@test.com', password: 'test', username: '5', age: '', friends: [], games: []}
    ];
    return {users};
  }
}