# Web Technologies & Web Design — Lab Assignments

## Student: Sklianchuk Bohdan  
Lab: 9  
Variant: 9  


## Description  
In this lab, you must integrate your **SPA e-commerce platform** with a working **REST API backend**.  
You will finalize all previously created pages (Home, Catalog, Item) by enabling **real data interaction** with your server using HTTP requests.

Products/entities should match those used in Labs 3–8.

Your backend can be reused from Labs 3–5 or created from scratch using any technology stack (Node.js, Java, Python, etc.).


## Requirements

- All requirements from **previous React.js labs** must be preserved.
- Use the **axios** library to perform all HTTP requests:  
- All API interaction logic should be **separated** into its own file or folder  
  (e.g. `api.js`, `services/api/items.js`, etc.)

### Functionality

- **Catalog Page**:
  - Fetch all product items from your backend using `GET` request via `axios`.
  - The response data should populate your item list dynamically.
- **Filters**:
  - Filtering/searching by properties must be done via `GET` with **URL parameters**.
  - Search by text property can remain on the frontend, or be combined with backend filtering.
- **Loading State**:
  - Display a **Spinner/Loader** component while waiting for API responses.

## Tech Stack

- React.js (Functional Components)
- axios (for HTTP requests)
- react-router-dom
- React Hooks: `useState`, `useEffect`, `useContext` (if applicable)
- CSS / SCSS / styled-components (choose one)
- Backend API (Node.js / Express / Java / Flask / etc.)

