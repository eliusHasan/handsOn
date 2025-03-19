Here’s a comprehensive `README.md` file for both the **frontend** and **backend** of the HandsOn platform.

---

# HandsOn – A Community-Driven Social Volunteering Platform

## 📌 1. Project Overview
HandsOn is a community-driven platform that connects individuals with meaningful social impact opportunities. Users can:
- Discover and join volunteer events.
- Post requests for community help.
- Form teams for large-scale initiatives.
- Track their impact with contributions logged on a personal and team level.

This platform encourages social responsibility, community collaboration, and proactive engagement in volunteer work.

---

## 📌 2. Technologies Used

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **API Communication**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Communication**: REST API

---

## 📌 3. Features

### Frontend
- **User Registration & Profile Management**:
  - Sign up, log in, and manage user profiles.
- **Discover & Join Volunteer Events**:
  - Browse and register for upcoming events.
- **Community Help Requests**:
  - Post and respond to help requests.
- **Teams & Group Initiatives**:
  - Create and join teams for long-term projects.
- **Leaderboard**:
  - View top volunteers and teams based on contributions.

### Backend
- **User Authentication**:
  - Secure registration and login using JWT.
- **Event Management**:
  - Create, list, and join events.
- **Help Requests**:
  - Post, comment on, and list help requests.
- **Teams**:
  - Create, join, and manage teams.
- **Leaderboard**:
  - Fetch top volunteers and teams.

---

## 📌 4. Database Schema

### MongoDB Collections

#### **User**
```javascript
{
  name: String,
  email: String,
  password: String,
  skills: [String],
  causes: [String],
  volunteerHours: Number,
  points: Number
}
```

#### **Event**
```javascript
{
  title: String,
  description: String,
  date: Date,
  location: String,
  category: String,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}
```

#### **HelpRequest**
```javascript
{
  title: String,
  description: String,
  urgency: String,
  comments: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}
```

#### **Team**
```javascript
{
  name: String,
  description: String,
  isPublic: Boolean,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  totalHours: Number
}
```

---

## 📌 5. Setup Instructions

### Frontend
1. Clone the repository:
   git clone 
   cd frontend
  
2. Install dependencies:
   npm install
  
3. Start the development server:
   
   npm run dev
 
4. Open your browser and navigate to `http://localhost:5173`.

### Backend
1. Clone the repository:
   
   git clone 
   cd backend
   
2. Install dependencies:
   
   npm install
 
3. Create a `.env` file in the root directory:
   
   MONGO_URI=mongodb://localhost:27017/handsOn
   PORT=5000
   JWT_SECRET=secret_key
  
4. Start the server:
   
   npm run dev
  
5. The server will run on `http://localhost:5000`.


## 📌 6. API Documentation

### Base URL
`http://localhost:5000/api`

### Endpoints

#### **Auth**
- **POST `/auth/register`**: Register a new user.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "skills": ["Teaching", "Public Speaking"],
      "causes": ["Education", "Environment"]
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

- **POST `/auth/login`**: Log in a user.
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

#### **Events**
- **GET `/events`**: Get all events.
  - Response:
    ```json
    [
      {
        "_id": "event_id",
        "title": "Community Cleanup",
        "description": "Join us to clean up the local park.",
        "date": "2023-11-15T10:00:00.000Z",
        "location": "Central Park, New York",
        "category": "Environmental",
        "attendees": ["user_id_1", "user_id_2"]
      }
    ]
    ```

- **POST `/events`**: Create a new event.
  - Request Body:
    ```json
    {
      "title": "Community Cleanup",
      "description": "Join us to clean up the local park.",
      "date": "2023-11-15T10:00:00.000Z",
      "location": "Central Park, New York",
      "category": "Environmental"
    }
    ```

#### **Help Requests**
- **GET `/help-requests`**: Get all help requests.
  - Response:
    ```json
    [
      {
        "_id": "help_request_id",
        "title": "Winter Clothes Distribution",
        "description": "We need volunteers to distribute winter clothes.",
        "urgency": "Urgent",
        "comments": ["I can help!", "Count me in."],
        "createdBy": "user_id"
      }
    ]
    ```

#### **Teams**
- **GET `/teams`**: Get all teams.
  - Response:
    ```json
    [
      {
        "_id": "team_id",
        "name": "Green Warriors",
        "description": "A team dedicated to environmental conservation.",
        "isPublic": true,
        "members": ["user_id_1", "user_id_2"],
        "totalHours": 120
      }
    ]
    ```

#### **Leaderboard**
- **GET `/leaderboard/volunteers`**: Get top volunteers.
  - Response:
    ```json
    [
      {
        "_id": "user_id",
        "name": "Alice Smith",
        "volunteerHours": 120,
        "points": 600
      }
    ]
    ```

---

## 📌 7. Running the Project

### Frontend
1. Navigate to the frontend folder:
   
   cd hands-on-frontend
  
2. Start the development server:
   
   npm run dev
  
3. Open your browser and navigate to `http://localhost:5173`.

### Backend
1. Navigate to the backend folder:
   
   cd hands-on-backend
  
2. Start the server:
   
   npm run dev
  
3. The server will run on `http://localhost:5000`.

