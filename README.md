# IMF Gadget API

A secure REST API for managing IMF's gadget inventory. This API handles gadget management, self-destruct sequences, and inventory tracking with secure authentication.

## Features Implemented ✨

- **Complete Gadget Management**
  - Create gadgets with auto-generated codenames
  - Retrieve gadgets with random mission success probabilities
  - Update gadget information
  - Soft delete (decommission) gadgets
  
- **Advanced Features**
  - JWT Authentication for secure access
  - Self-destruct sequence with confirmation codes
  - Status filtering for gadget inventory
  - Decommissioning system with timestamps

## Tech Stack 🛠

- Node.js & Express
- MongoDB with Mongoose
- JWT for Authentication
- UUID for unique identifiers

## Getting Started 🚀

1. **Prerequisites**
   - Node.js (v14 or higher)
   - MongoDB
   - npm or yarn

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]

   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env
   ```

3. **Environment Variables**
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   JWT_EXPIRES_IN=24h
   ```

4. **Run the Application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints 🔌

### Gadget Management
- `GET /gadgets` - Get all gadgets
  - Optional query param: `status` (Available/Deployed/Destroyed/Decommissioned)
- `POST /gadgets` - Create a new gadget
- `PATCH /gadgets/:id` - Update a gadget
- `DELETE /gadgets/:id` - Decommission a gadget

### Special Operations
- `POST /gadgets/:id/self-destruct` - Trigger self-destruct sequence

## Authentication 🔐

All endpoints require JWT authentication. Include the token in your request headers:
```
Authorization: Bearer <your_jwt_token>
```

## Sample Requests 📝

### Create a Gadget
```json
POST /gadgets
{
  "name": "Exploding Pen"
}
```

### Self-Destruct Sequence
```json
POST /gadgets/:id/self-destruct
{
  "confirmationCode": "ABC123"
}
```

## Response Examples 📊

### Get Gadgets Response
```json
{
  "gadgets": [
    {
      "id": "uuid-here",
      "name": "Exploding Pen",
      "codename": "The Nightingale",
      "status": "Available",
      "missionSuccessProbability": 87
    }
  ]
}
```

## Status Codes 📈

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Deployment 🌐

The API is deployed and accessible at:
[Live Link](https://imf-assignment.onrender.com/)

## Documentation 📚

Complete API documentation available at:
[Documentation Link](https://upraised-assignment.postman.co/workspace/Upraised-Assignment-Workspace~118bb136-bc02-4c6b-94e7-381e209dcb50/collection/33498402-06f7d41f-7e09-4464-9c8c-fb0ecf513d7b?action=share&creator=33498402)


## Security Features 🔒

- JWT Authentication
- Secure password hashing
- Request validation
- Error handling
- MongoDB security best practices

---
