# Next.js Developer Intern Assignment: Simple Blog Post CRUD

## Overview

This project is a simple blog post CRUD application with a Flask backend and a Next.js frontend. The backend handles API requests and manages blog data, while the frontend provides a user interface for interacting with the blog.

## Getting Started

### Backend/Server

The backend is built using Flask, a lightweight Python web framework. It uses SQLAlchemy for database interactions and Flask-CORS to handle cross-origin requests.

#### Prerequisites

Ensure you have Python installed on your machine. You can download it from [python.org](https://www.python.org/).

#### Installation

Navigate to the `backend` directory and install the required Python libraries:

```bash
cd backend
pip install Flask  
pip install Flask-SQLAlchemy
pip install Flask-Cors 
pip install SQLAlchemy
```

#### Running the Server

To start the Flask server, run:


```bash
python main.py
```



## Frontend/Client

The frontend is built using Next.js, a React framework that enables server-side rendering and static site generation.

#### Prerequisites
Ensure you have Node.js and npm (or Yarn, pnpm, or Bun) installed. You can download Node.js from nodejs.org.

#### Installation
Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install


#### Running the Development Server
    To start the Next.js development server, use:

```bash
npm run dev



## Features

- Create: Add new blog posts.
- Read: View existing blog posts.
- Update: Edit blog posts.
- Delete: Remove blog posts.


## API Endpoints

- GET /api/blogs: Retrieve a list of all blog posts.
- POST /api/blogs: Create a new blog post.
- PUT /api/blogs/ : Update an existing blog post.
- DELETE /api/blogs/ : Delete a blog post.

## Technologies
- Frontend:
   - Next.js
   - React
   - ShadCN (for UI components)
   - Inbuilt CSS (for desktop and mobile responsiveness)

- Backend:
   - Flask
   - SQLAlchemy

- Database:
   - SQLite

