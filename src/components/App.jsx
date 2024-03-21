// import React from "react";
// import FeedbackForm from "./FeedbackForm";
import SearchBar from "./SearchBar";
// import LangSwitcher from "./LangSwitcher";

const App = () => {
  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      {/* <FeedbackForm /> */}
      <SearchBar />
      {/* <LangSwitcher /> */}
    </div>
  );
};

export default App;
