import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Album, Comment, Photo, Post, Todo, User } from '../types';

@Injectable()
export class RestService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private BaseUrl = 'http://localhost:3000/';

      /**
   * Creates a new RestService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

/* Album Services */
    getAllAlbums(): Promise<Album[]> {
        let url = this.BaseUrl + 'albums'
        let albums = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Album[])
      .catch(this.handleError);
      return albums;
    }

/* Comment Services */
    getAllComments(): Promise<Comment[]> {
        let url = this.BaseUrl + 'comments'
        let comments = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Comment[])
      .catch(this.handleError);
      return comments;
    }

/* Photo Services */
    getAllPhotos(): Promise<Photo[]> {
        let url = this.BaseUrl + 'photos'
        let photos = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Photo[])
      .catch(this.handleError);
      return photos;
    }

/* Post Services */
    getAllPosts(): Promise<Post[]> {
        let url = this.BaseUrl + 'posts'
        let posts = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
      return posts;
    }

/* Todo Services */
    getAllTodos(): Promise<Todo[]> {
        let url = this.BaseUrl + 'todos'
        let todos = this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
      return todos;
    }

/* User Services */
    getAllUsers(): Promise<User[]> {
        let url = this.BaseUrl + 'users';
        let users = this.http.get(url).toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
      return users;
    }

    getByUserId(id: number) {
        let url = this.BaseUrl + 'users/' + id;
        let user = this.http.get(url).toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
      return user;
    }


  /**
    * Handle HTTP error
    */
  private handleError (error: any): Promise<any> {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg || error);
  }
}