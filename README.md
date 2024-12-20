# MFlix User Management Application

## Overview

Welcome to the MFlix User Management Application! This is a full-stack application that allows users to manage their profiles by fetching names from a MongoDB cluster. It features two main components: a User Form for inputting user details and a User List for displaying those details.

**Please Note:** This application is currently a work in progress. There are known issues that need to be addressed, including incomplete functionality for user updates and a lack of styling.

## Features

- Fetch user data from a MongoDB cluster.
- User Form component for adding and updating user information (name and email).
- User List component for displaying all users.
- Edit and delete functionality for user profiles.

## Current Status

- The **User Update** feature is not fully functional yet.
- The application lacks adequate styling, making the user interface less visually appealing.
  
Contributors are encouraged to help work on these areas for improvement!

## Backend
The backend for this application is hosted on Render. You can find the backend code repository on GitHub here: https://github.com/Jenkos23/FullStackMern-App-Project.git
# Deployed : Url: https://fullstackmern-app-project.onrender.com
# endpoints: 
1. Users: Url/users
2. individual user by Id: Url/users/_id
 

## Application Structure

### Components

1. **User Form**:
   - Built to collect user details (name and email).
   - Allows users to add new profiles or update existing ones (needs functionality completed).

2. **User List**:
   - Displays a list of users retrieved from the MongoDB database.
   - Each user can be edited or deleted.

### Service

- **apiService.jsx**:
  - Located in the `service` directory, this file contains all the API endpoints required to interact with the backend.
  - This service layer abstracts the HTTP requests for cleaner component code and easier maintenance.

### Entry Point

- **App.jsx**:
  - The main entry point of the application.
  - Responsible for rendering the User List to the browser and managing the overall application flow.

## Getting Started

### Prerequisites

To run this application, you'll need:

- Node.js
- npm (Node Package Manager)
- Access to an existing MongoDB cluster hosted on Render.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mflix-user-management
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables according to your MongoDB configuration.

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

Refer to the `apiService.jsx` file for the list of available API endpoints. Each API call is structured to support CRUD operations on user profiles, enabling users to interact seamlessly with the backend.

## Contributing

We welcome contributions! If you’d like to help improve this project, especially in the areas of user update functionality and styling, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- MongoDB for providing a robust database solution.
- Render for hosting our backend services.

We hope you enjoy working on the MFlix User Management Application! Please feel free to create issues or pull requests to help us improve this application. Happy coding!
