# Web Technologies & Web Design — Lab Assignments

## Student: Sklianchuk Bohdan  
Labs: 7–8  
Variant: 9  

## Description  
In these labs, you are continuing development of your **SPA e-commerce platform** using **React.js** by implementing two new parts:

- Lab 7: **Catalog Page** — a list of product cards rendered using `.map()`, with routing to/from Home.
- Lab 8: **Item Page** — individual product detail view, and interactivity upgrades for Home & Catalog pages.

The application should now support basic page navigation and dynamic item rendering from internal state or context.

## Lab 7 — Catalog Page

### Requirements

- All requirements from **Lab 6** must be retained.
- Use the `.map()` method to render a dynamic list of product components from a dataset.
- Add **React Router** (`react-router-dom`) for navigation between:
  - Home (`/`)
  - Catalog (`/catalog`)
- Navigation must be SPA-style — **no full page reloads**.
- Separate all UI elements into reusable components:
  - Example: `PrimaryButton.jsx`, `Select.jsx`, `ProductCard.jsx`


## Lab 8 — Item Page + Interactivity

### Requirements

- Create an **Item Detail Page** (`/catalog/:id`) that shows specific information about the selected product.
- Use **state** or **context** to manage your item data (your choice):
  - `useState()` for local component state
  - `useContext()` for global shared state
- Do **not** use class components or `this.state`.  
  Use modern **React Hooks** instead.

### Interactivity (Mandatory)

- **Home Page**:  
  - Add a **“View more”** button that reveals additional elements (e.g., extra headings, paragraphs, or components).
- **Catalog Page**:  
  - Implement **search** by any text-based property of the items.
  - Implement **filtering** by any property (e.g., category, size, type).
  - Each item’s **“View more”** button should route to its corresponding **Item Page** using the correct ID or key.
- **Item Page**:  
  - Display full details of the selected item, fetched from state/context.

## Tech Stack

- React.js (Functional Components)
- react-router-dom (for SPA routing)
- React Hooks: `useState`, `useContext` (if used)
- CSS / SCSS / styled-components / UI Library (choose one)
- SPA behavior required — page must not reload during navigation
- No responsiveness required, must work in latest **Chrome**
