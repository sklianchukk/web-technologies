import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Checkout.css';

const ErrorMessageComponent = ({ children }) => {
  return <div className="error-message">{children}</div>;
};

const CheckoutPage = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .matches(/^[a-zA-Z]+$/, 'No special characters allowed')
      .max(30, 'First name must be at most 30 characters'),

    lastName: Yup.string()
      .required('Last name is required')
      .matches(/^[a-zA-Z]+$/, 'No special characters or numbers allowed')
      .max(30, 'Last name must be at most 30 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Only numbers are allowed')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Phone number is required'),
    address: Yup.string()
      .required('Address is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form Submitted', values);
    window.location.href = '/success';
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="form-field">
              <label>First Name:</label>
              <Field name="firstName" type="text" />
              <ErrorMessage
                name="firstName"
                component={ErrorMessageComponent}
              />
            </div>

            <div className="form-field">
              <label>Last Name:</label>
              <Field name="lastName" type="text" />
              <ErrorMessage
                name="lastName"
                component={ErrorMessageComponent}
              />
            </div>

            <div className="form-field">
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component={ErrorMessageComponent} />
            </div>

            <div className="form-field">
              <label>Phone:</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component={ErrorMessageComponent} />
            </div>

            <div className="form-field">
              <label>Address:</label>
              <Field name="address" type="text" />
              <ErrorMessage name="address" component={ErrorMessageComponent} />
            </div>

            <button className="submit-button">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPage;
