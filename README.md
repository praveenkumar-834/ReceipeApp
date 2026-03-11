# ReceipeApp
# Recipes API

A REST API built with **Node.js, Express, and MongoDB** that allows users to manage recipes.
The API supports **Create, Read, Update, and Delete (CRUD)** operations and follows the **MVC architecture pattern**.

---

## Features

* Create new recipes
* View all recipes
* View recipe by ID
* Update recipe details
* Delete recipes
* MongoDB database integration
* MVC project structure

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## Project Structure

```
recipes-app
│
├── api
│   └── index.js
│
├── config
│   └── db.js
│
├── controllers
│   └── recipeController.js
│
├── models
│   └── recipeModel.js
│
├── routes
│   └── recipeRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── vercel.json
```

---

## Installation

Clone the repository

```
git clone https://github.com/yourusername/recipes-api.git
```

Navigate to the project folder

```
cd recipes-api
```

Install dependencies

```
npm install
```

---

## Environment Variables

Create a `.env` file in the root folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Running the Server

Start the server

```
node server.js
```

or with nodemon

```
nodemon server.js
```

---

## API Endpoints

### Create Recipe

POST `/api/recipes`

Example Body

```
{
"name": "Pizza",
"ingredients": "Flour, Cheese, Tomato",
"instructions": "Bake for 20 minutes"
}
```

---

### Get All Recipes

GET `/api/recipes`

---

### Get Recipe By ID

GET `/api/recipes/:id`

---

### Update Recipe

PUT `/api/recipes/:id`

---

### Delete Recipe

DELETE `/api/recipes/:id`

---

## Deployment

This project is deployed on **Vercel**.

Example API URL

```
https://receipe-app-eight.vercel.app/api/recipes
```

---

## Testing

You can test the API using **Postman** by sending HTTP requests to the endpoints.

---

## Author

Praveen Kumar


