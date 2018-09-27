# CRUD Operations in Angular 6 using HTTP requests

In this application, I've used `HttpClient`'s methods - _get, post, put_ and _delete_ to perform CRUD operations on the mock json data which is run locally with **json-server** at `http://localhost:3000/users`

### Why write a Service?

In Angular application, it is always a best practice to separate data presentation logic usually written in a _**Component**_ and data access logic written in a _**Service**_. 

Services are available to all classes and could be injected in any class throughout our application. Hence, it is good to write the data access logic in a _Service_ (shown below) 

### Making a GET request
```
  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }
```
### Making a POST request
```
  postUsers(user): Observable<User> {
    return this.http.post<User>(this.url, user, this.httpOptions);
  }
```
### Making a PUT request
```
  updateUser(userId, user): Observable<User> {
    const putUrl = this.url + '/' + userId;
    return this.http.put<User>(putUrl, user, this.httpOptions);
  }
```
### Making a DELETE request
```
  deleteUser(userId): Observable<{}> {
    const deleteUrl = this.url + '/' + userId;
    return this.http.delete(deleteUrl, this.httpOptions);
  }
```

A note which is to be worth remembered.
> ### Always **_subscribe_**!
> An [HttpClient](https://angular.io/guide/http) method does not begin its HTTP request until you call `subscribe() `on the observable returned by that method. This is true for all HttpClient methods.

Useful Links: 
* [Comparison of Observables with Promises](https://angular.io/guide/comparing-observables#observables-compared-to-promises)

# AngularHttp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.