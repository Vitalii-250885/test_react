import css from "./Options.module.css";

const Options = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <img src="Frame8.svg" alt="" />
      </li>
      <li className={css.item}>Services</li>
      <li className={css.item}>Our Projects</li>
      <li className={css.item}>Contact Us</li>
      <li className={css.item}>Request a Consultation</li>
    </ul>
  );
};

export default Options;
