import Options from "../options/Options";

import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>GeCraft</h1>
      <p className={css.text}>
        Your Reliable Partner for Assured Software Delivery
      </p>
      <button type="button" className={css.button}>
        Request a Consultation
      </button>
      <Options />
      <p className={css.text2}>
        Harnessing cutting-edge technology and years of industry expertise,
        GeCraft designs and develops custom, end-to-end solutions that bring
        your unique software vision to life.
      </p>
      <div className={css["gradient-pink"]}></div>
      <div className={css["gradient-sky"]}></div>
      <div className={css["gradient-blue"]}></div>
    </div>
  );
};

export default Header;
