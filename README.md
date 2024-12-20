﻿
# Booknest - Online Bookstore

**Booknest** is a responsive and fully functional online bookstore designed for book enthusiasts. Booknest allows users to browse, search, and purchase books with ease. This project utilizes HTML, CSS, and JavaScript, with book data managed through a JSON file that serves as an API. Local storage is used as a backend for persisting user data such as cart contents.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [About Page](#about-page)
  - [Shop Page](#shop-page)
  - [Cart Page](#cart-page)
  - [Book Detail Page](#book-detail-page)
  - [Searched Books Page](#searched-books-page)
  - [Login and Signup Pages](#login-and-signup-pages)
- [Project Structure](#project-structure)
- [Data Management](#data-management)
- [Installation](#installation)
- [Usage](#usage)

---

## Overview

**Booknest** is a user-friendly online bookstore that provides a seamless shopping experience for book lovers. Users can search for books by title or author, view book details, add items to their cart, and proceed to checkout. This project uses responsive design principles to ensure compatibility across devices, making Booknest accessible and enjoyable on both mobile and desktop screens.

---

## Features

- **Responsive Design**: Optimized for various devices, from desktops to mobile screens.
- **Comprehensive Book Selection**: Browse organized book categories, and add items to the cart.
- **Shopping Cart**: Add, update, and remove books from your cart with real-time updates.
- **Search Functionality**: Easily search by book title or author name.
- **Book Details**: View detailed information on each book.
- **API Integration**: Book data is managed through a JSON file to simulate API responses.
- **Local Storage Backend**: User data is stored in the browser’s local storage to retain cart items.

---

## Technologies Used

- **HTML**: Structure and layout of the website.
- **CSS**: Styling and responsive design.
- **JavaScript**: Dynamic functionality, including API simulation and cart management.
- **Books API (books.json)**: A JSON file serving as a data source for book details.
- **Local Storage**: Used as a backend to store cart data and manage user session information.

---

## Color Scheme

The Booknest color palette enhances the user experience with a calm, inviting aesthetic:

| Color Name   | Hex Code   |
|--------------|------------|
| Primary Color| `#ff7700`  |
| Background   | `#0d2537`  |
| Accent Color | `#21758f`  |
| Text Color   | `#fff`     |

---

## Pages

### Home Page

The Home page introduces Booknest with various sections:
- **Header**: Navigation links and cart icon with an item count.
- **Hero**: Engaging banner with a search input for finding titles and authors.
- **CTA (Call to Action)**: Prompt to explore popular book categories.
- **Review and Feedback**: Displays customer reviews.
- **Footer**: Links to important pages and social media.

![Home Page Screenshot](images/homepage.png)

### About Page

The About page offers background information on Booknest:
- **Header**: Navigation for site exploration.
- **Our Story**: Brief history of Booknest.
- **Our Mission**: Values and goals of Booknest.
- **FAQ**: Answers to frequently asked questions.
- **Footer**: Site navigation and social links.

![About Page Screenshot](images/aboutpage.png)

### Shop Page

The Shop page is where users can explore books and make selections:
- **Header**: Site navigation and cart access.
- **Hero Section**: A welcoming banner introducing the shop.
- **Book Categories**: Organized categories; books can be added to the cart from here.
- **Footer**: Footer links for navigation.

![Shop Page Screenshot](images/shop.png)

### Cart Page

The Cart page provides an overview of selected items:
- **Header**: Navigation to other pages.
- **Cart Table**: Item list with price, quantity, and total cost.
- **Payment**: Field to enter payment details and complete purchases.
- **Footer**: Includes site links and contact information.

![Cart Page Screenshot](images/cart.png)

### Book Detail Page

Displays complete information on a specific book:
- **Book Information**: Description, author, publication year, and other details.
- **Add to Cart**: Button to add the selected book to the cart.

![Book Detail Page Screenshot](images/bookdetail.png)

### Searched Books Page

This page displays search results for book title or author:
- **Search Results**: Lists all books that match the search query.

![Searched Books Page Screenshot](images/searchedbooks.png)

### Login and Signup Pages

These pages allow users to register or log into their Booknest account for a personalized shopping experience.

![Login Page Screenshot](images/login.png)
![Signup Page Screenshot](images/register.png)

---

## Project Structure

```plaintext
Online-Book-Store/
├── html/
│   ├── about.html            # About Page
│   ├── shop.html             # Shop Page
│   ├── cart.html             # Cart Page
│   ├── book-detail.html      # Book Detail Page
│   ├── searched-books.html   # Search Results Page
│   ├── login.html            # Login Page
│   ├── register.html           # Signup Page
├── css/
│   ├── about.css         # About page styles
│   ├── cart.css          # Cart page styles
│   ├── searched-books.css# Search Results page styles
│   ├── shop.css          # Shop page styles
│   ├── style.css         # Main styles
│   ├── login.css         # Login page styles
│   ├── register.css      # Signup page styles
│   └── book-detail.css   # Book Detail page styles
├── js/
│   ├── cart.js           # Cart functionality
│   ├── shop.js           # Shop page functionality
│   ├── about.js          # About page functionality
│   ├── searched-books.js # Search functionality
│   ├── book-detail.js    # Book Detail functionality
│   ├── login.js          # Login page functionality
│   ├── register.js       # Signup page functionality
    |__ main.js               # global JavaScript functionality
│   └── script.js         # General script for common functions
└── images/               # Image folder for the website
└── data/              
    |── books.json            # JSON file serving as API for book data
└── main.css              # global CSS styles 
├── index.html            # Home Page

```

---

## Data Management

All book information is stored in a JSON file (`books.json`). This JSON file acts as an API, providing easy access to book details for search, display, and filtering. Local storage is used as a backend to manage cart data, making the shopping experience seamless and persistent across sessions.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dugsiiyeinc/Online-Book-Store.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Online-Book-Store
   ```

---

## Usage

1. Open `index.html` in a web browser to access the Booknest home page.
2. Navigate through the website to browse, search, and add books to your cart.
3. Complete purchases on the Cart page by entering payment details.

---
## Live Demo

You can explore the live version of the **Booknest** Online Bookstore here:

[**Booknest - Live Demo**](https://booknest-bookstore.vercel.app/)

Thank you for exploring **Booknest**! We hope this documentation provides a thorough understanding of the project.
