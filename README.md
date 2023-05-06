
# Movie API using MongoDB, Express and TypeScript

This project is a RESTful API that allows users to view, create and update movies, post comments, perform authentication and more. The API is built using MongoDB, Express and TypeScript.

## How to use the API

In this video, I will explore how to use the Movie API and it's authorization for getting access to some endpoints  [Exploring MOVIE API](https://www.youtube.com/watch?v=JIf3LH4y_jA)

## Features

* List movies with pagination, and filter by search (without authentication)
* Get a movie and its rating average (without authentication)
* View comments of a movie, paginated by cursor (without authentication)

### User can:
* Register
* Log in
* Comment movies
* Request to add a movie

### Admin can:
* Log in
* List and search users
* See list of comments by user
* Delete comments and reviews
* Accept movie to add



## Tech Stack

**Server:** 
* MongoDB: a popular NoSQL database
* Express: a fast and flexible Node.js web application framework
* TypeScript: a superset of JavaScript that adds strong typing and other features
* Node.js: an open-source, cross-platform JavaScript runtime environment


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` by default is in 3001

`JWT_SECRET` in env.exaple

`DB_URI`your MongoDB URI


## Installation

Install my-project with npm

* Clone the repository on your local machine.
* Install the dependencies with npm install.
* Run the application with npm run dev.

## Contributing

If you would like to contribute to this project, follow these steps:

* Fork the project.
* Create a new branch (git checkout -b feature/feature-name).
* Make the desired changes.
* Submit a pull request.


## Authors

- [stevenquintana](https://www.linkedin.com/in/stevenquintana/)


## License

This project is licensed under the MIT License. See the LICENSE file for more information.
