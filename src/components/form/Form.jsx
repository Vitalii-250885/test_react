import { useDispatch } from "react-redux";

import css from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = {
      type: "users/addUser",
      payload: { firstName: e.target[0].value, lastName: e.target[1].value },
    };

    dispatch(action);
    e.target.reset();
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className={css.form}>
      <label>
        First Name
        <input type="text" name="first-name" />
      </label>
      <label>
        Last Name
        <input type="text" name="last-name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
