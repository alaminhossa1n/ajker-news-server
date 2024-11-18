# Ajker Khobor News Portal Backend

This is the backend for the **Ajker Khobor** news portal, built with **Express.js**, **TypeScript**, and **MongoDB**. The project provides APIs for user management, category management, and article management.

---

## **Features**
- **User Management**: Create, update, delete users, and manage authentication with roles.
- **Category Management**: Manage categories and sub-categories for articles.
- **Article Management**: Create, update, and fetch articles, including breaking news, featured articles, and trending news.
- **Global Error Handling**: Centralized error handling for all routes.

---

## **Tech Stack**
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building APIs.
- **MongoDB & Mongoose**: Database and ODM for managing collections.
- **TypeScript**: Typed JavaScript for better developer experience.
- **JWT**: For authentication and role-based access control.
- **bcrypt**: For secure password hashing.
- **dotenv**: For environment variable management.

---

## **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/alaminhossa1n/ajker-news-server.git
   cd ajker-news-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server**
   - Development mode:
     ```bash
     npm run start:dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

5. **Server is live at**
   ```bash
   http://localhost:5000
   ```
   Or visit the live server:
   [https://ajker-news-server.vercel.app/](https://ajker-news-server.vercel.app/)

---

## **API Endpoints**

### **User Management**
| Method | Endpoint              | Description                     | Auth Required |
|--------|-----------------------|---------------------------------|---------------|
| POST   | `/api/user/create`    | Create a new user               | Admin         |
| GET    | `/api/user/users`     | Get all users                   | Admin         |
| POST   | `/api/user/login`     | User login                      | No            |
| POST   | `/api/user/change-password` | Change user password       | User          |
| PATCH  | `/api/user/update/:id`| Update user details             | User/Admin    |

---

### **Category Management**
| Method | Endpoint                | Description                     | Auth Required |
|--------|-------------------------|---------------------------------|---------------|
| POST   | `/api/category/create`  | Create a new category           | Admin         |
| GET    | `/api/category/categories` | Get all categories          | No            |
| PATCH  | `/api/category/update/:id` | Update category details     | Admin         |

---

### **Article Management**
| Method | Endpoint                | Description                     | Auth Required |
|--------|-------------------------|---------------------------------|---------------|
| POST   | `/api/article/create`   | Create a new article            | No            |
| GET    | `/api/article/articles` | Get all articles                | No            |
| PATCH  | `/api/article/update/:id` | Update article details        | No            |
| GET    | `/api/article/breaking` | Get breaking news articles      | No            |
| GET    | `/api/article/featured` | Get featured articles           | No            |
| GET    | `/api/article/trending` | Get trending articles (48 hrs)  | No            |

---

## **Project Structure**
```
ajker-news-server/
├── app/
│   ├── modules/
│   │   ├── user/              # User-related routes, controllers, and services
│   │   ├── category/          # Category-related routes, controllers, and services
│   │   ├── article/           # Article-related routes, controllers, and services
├── dist/                      # Compiled TypeScript files
├── node_modules/              # Dependencies
├── .env                       # Environment variables
├── package.json               # Project metadata and scripts
├── tsconfig.json              # TypeScript configuration
└── server.ts                  # Entry point for the server
```

---

## **Live Server**
The backend is deployed and live at:
[https://ajker-news-server.vercel.app/](https://ajker-news-server.vercel.app/)

---

## **License**
This project is licensed under the **ISC License**.

---

## **Contributors**
- **[Al-Amin Hossain](https://github.com/alaminhossa1n)**: Developer and Maintainer

For any queries or suggestions, feel free to open an issue on the GitHub repository.

[GitHub Repository](https://github.com/alaminhossa1n/ajker-news-server)