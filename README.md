# 🎬 Movie Full Stack Application

## Overview

This project is a **Full Stack Movie Management Application** built using **Angular (frontend)** and **Spring Boot (backend)**.
It allows users to **view, add, update, and delete movies**, with all data stored in a **MySQL database**.

The application demonstrates **frontend–backend integration, RESTful API design, and database management** using modern technologies.

---

<img width="960" height="449" alt="image" src="https://github.com/user-attachments/assets/bd300ca3-7dc5-4524-914f-7684072a2374" />

---

<img width="960" height="450" alt="image" src="https://github.com/user-attachments/assets/6bfbc93c-03fb-40da-ba48-aa6e087cf6e9" />

---

## 🚀 Features

* List all movies
* View movie details
* Add new movies
* Edit existing movies
* Delete movies
* RESTful API integration
* Responsive frontend built with Angular

---

## 🛠 Tech Stack

### Frontend

* Angular 21
* TypeScript
* RxJS

### Backend

* Spring Boot 4
* Java 17
* Spring Data JPA
* Spring Web MVC

### Database

* MySQL

---

## ⚙️ Backend Setup

### Requirements

* Java 17+
* Maven
* MySQL

### Configuration

Edit the following file:

```id="j6q3lv"
movie-Backend/src/main/resources/application.properties
```

Add your MySQL credentials:

```id="df7vwb"
spring.datasource.url=jdbc:mysql://localhost:3306/moviedb
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
```

### Build and Run Backend

```id="y9h31n"
cd movie-Backend
mvn clean install
mvn spring-boot:run
```

The backend will run at:

```id="ahzj9a"
http://localhost:8080
```

---

## 🎨 Frontend Setup

### Requirements

* Node.js
* npm

### Install Dependencies

```id="g1z9co"
cd movie-frontend
npm install
```

### Run the Application

```id="3e9pg7"
npm start
```

The frontend will run at:

```id="3br2hl"
http://localhost:4200
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /api/movies      | List all movies    |
| GET    | /api/movies/{id} | Get movie by ID    |
| POST   | /api/movies      | Create a new movie |
| PUT    | /api/movies/{id} | Update a movie     |
| DELETE | /api/movies/{id} | Delete a movie     |

---

## 🎞 Movie Model

```id="pn2k7t"
export interface Movie {
  id?: number;
  title: string;
  genre: string;
  releaseYear: number;
}
```

---

## 📌 Future Enhancements

* Movie search functionality
* Pagination for movie listings
* User authentication and authorization
* Movie rating system
* Cloud deployment

---


