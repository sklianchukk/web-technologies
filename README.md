# Web Technologies & Web Design — Lab Assignments

## Student: Sklianchuk Bohdan  
Labs: 10–11  
Variant: 9  

## Description  
In these labs, you are finalizing your **SPA e-commerce platform** with the last key features:

- **Lab 10**: Implement a **Shopping Cart Page** using **Redux** for global state management.
- **Lab 11**: Build a **Checkout Form** using **Formik** for form handling and validation, and create a final **Success Page** after submission.

These labs involve integrating advanced state and form handling libraries into your React project, completing the full purchase flow.

## Lab 10 — Redux: Shopping Cart Page

### Requirements

- All requirements from previous labs must remain intact.
- The **"Add to Cart"** functionality must now be handled through the **Redux flow**:
  - Add item to cart = `dispatch(action)`
  - Cart page reads from **Redux store**
- On the **Cart Page**, implement the following actions via Redux:
  - Increase item quantity
  - Decrease/remove item
- Use React Redux Hooks:
  - `useSelector()` — for accessing state from store 
  - `useDispatch()` — for dispatching actions 

## Lab 11 — Formik: Checkout & Success Pages

### Requirements

- Implement a **Checkout Page** with a form that includes:
- At least **5 fields**
- Every field must have a **validation rule** (not just "required")
  - Use rules such as:
    - Max length
    - No special characters
    - Only numbers
    - Regex validation (e.g., for email)
    - Non-string input (e.g., phone number)
- All validation errors must be displayed clearly with descriptive messages.
- Create a separate React component for **error messages**.
- After successful submission, the user must be **redirected to the Success Page**.

## Tech Stack

- React.js (Functional Components)
- Redux (for cart state)
- Formik & Yup (for form validation)
- react-router-dom (for routing)
- React Redux (hooks: `useSelector`, `useDispatch`)
- CSS / SCSS / styled-components (choose one)
- No responsiveness required; must work in latest **Chrome**
