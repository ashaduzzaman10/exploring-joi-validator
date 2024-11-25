# exploring-joi-validator

## Folder Structure

```
exploring-joi-validator/
├── controllers/
│   ├── loginController.js
│   └── registerController.js
├── db/
│   └── dbConnection.js
├── errors/
│   └── error.js
├── middlewares/
│   ├── common/
│   │   └── checker.js
│   └── validation/
│       ├── userValidation.js
│       └── userInputSchema.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoute.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Project Overview

This project demonstrates the use of Joi for validating user input in a Node.js application with Express and MongoDB. It includes user registration and login functionalities with input validation, error handling, and database interactions.

## Setup Instructions

1. **Clone the Repository**
  ```sh
  https://github.com/ashaduzzaman10/exploring-joi-validator.git
  
  cd exploring-joi-validator
  ```

2. **Install Dependencies**
  ```sh
  npm install
  ```

3. **Environment Variables**
  Create a `.env` file in the root directory and add the following:
  ```env
  DBURL=<your-mongodb-url>
  PORT=<your-port>
  ```

4. **Start the Server**
  ```sh
  npm start
  ```

## Project Structure

- **`app.js`**: Main application file that sets up middleware, routes, and error handling.
- **`controllers/`**: Contains the logic for user registration and login.
  - `loginController.js`
  - `registerController.js`
- **`db/`**: Database connection setup.
  - `dbConnection.js`
- **`errors/`**: Custom error handlers.
  - `error.js`
- **`middlewares/`**: Middleware for validation and common tasks.
  - `common/checker.js`
  - `validation/userValidation.js`
  - `validation/userInputSchema.js`
- **`models/`**: Mongoose schemas and models.
  - `userModel.js`
- **`routes/`**: Application routes.
  - `userRoute.js`

## API Endpoints

- **Home Route**
  - `GET /`
  - Response: `{ success: true, data: { message: "welcome to home" } }`

- **Health Check Route**
  - `GET /health`
  - Response: `{ success: true, data: { message: "successful" } }`

- **User Registration**
  - `POST /api/register`
  - Request Body: `{ name, email, password }`
  - Response: Success or error message

- **User Login**
  - `GET /api/login`
  - Request Body: `{ email, password }`
  - Response: Success or error message

## Error Handling

- **Not Found Handler**
  - Returns a 400 status with a "resource not found" message.

- **Server Error Handler**
  - Returns a 500 status with a "server error" message and logs the error.

## Validation

- **Joi Validation**
  - Used for validating user input during registration and login.
  - Schemas defined in `middlewares/validation/userInputSchema.js`.

## Database

- **MongoDB**
  - Mongoose is used for database interactions.
  - Connection setup in `db/dbConnection.js`.

## Dependencies

- `bcrypt`: For hashing passwords.
- `cors`: For enabling CORS.
- `dotenv`: For environment variables.
- `express`: For creating the server.
- `joi`: For input validation.
- `mongoose`: For MongoDB interactions.
- `morgan`: For logging HTTP requests.
- `nodemon`: For development, to automatically restart the server on changes.

## Development

- **Run the server**
  ```sh
  npm start
  ```

- **Linting and Formatting**
  - Ensure code quality and consistency.

## Contribution

- Fork the repository.
- Create a new branch.
- Make your changes.
- Submit a pull request.

## License

This project is licensed under the MIT License.
# exploring-joi-validator
