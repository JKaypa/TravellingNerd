# TravellingNerd

A full-stack blog application for sharing travel experiences and stories. Built with React, Express, and MongoDB.

## Tech Stack

### Backend

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose/Typegoose
- **Image Storage**: Cloudinary
- **File Upload**: Multer + express-fileupload

### Frontend

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Rich Text Editor**: React Quill
- **HTTP Client**: Axios

## Features

- View all blog posts on the homepage
- Read individual blog posts in detail
- Create new blog posts with rich text editor
- Edit existing blog posts
- Image upload support via Cloudinary
- Responsive design with Tailwind CSS

## API Endpoints

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/blogs`     | Get all blog posts        |
| GET    | `/api/blogs/:id` | Get blog post by ID       |
| POST   | `/api/blogs`     | Create new blog post      |
| PUT    | `/api/blogs/:id` | Update existing blog post |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd TravellingNerd
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

#### Backend

Create a `.env` file in the `backend` directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=8000
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

#### Frontend

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:8000/api
```

### Running the Application

#### Backend

```bash
cd backend
npm run dev
```

The server will start on port 8000 (or the port specified in your .env).

#### Frontend

```bash
cd frontend
npm run dev
```

The frontend will start on port 5173 (Vite default).

### Building for Production

#### Backend

```bash
cd backend
npm run build
npm start
```

#### Frontend

```bash
cd frontend
npm run build
```

## Routes

| Path          | Component  | Description                     |
| ------------- | ---------- | ------------------------------- |
| `/`           | BlogList   | Homepage showing all blog posts |
| `/detail/:id` | BlogDetail | Single blog post view           |
| `/write`      | PostForm   | Create new blog post            |
| `/edit/:id`   | EditForm   | Edit existing blog post         |

## Scripts

### Backend

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
