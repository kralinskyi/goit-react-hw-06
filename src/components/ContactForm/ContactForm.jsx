import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
  id: "",
};

export default function ContactForm({ onSubmitForm }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onSubmitForm({ ...values, id: nanoid() });

    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name </label>
          <Field
            name="name"
            id={nameId}
            type="text"
            className={css.inputs}></Field>
        </div>
        <div className={css.field}>
          <label htmlFor={numberId}>Number </label>
          <Field
            name="number"
            id={numberId}
            type="text"
            className={css.inputs}></Field>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
