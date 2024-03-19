// import { useState } from "react";

const App = () => {
  // const [feedbacks, setValues] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const updateFeedback = (feedbackType) => {
    console.log("Hello:", feedbackType);
    // setValues({
    //   ...feedbacks,
    //   feedbackType: feedbacks.feedbackType + 1,
    // });
  };

  return (
    <>
      <button onClick={"Hello"}>Good</button>
      <button onClick={"Privet"}>Neutral</button>
      <button onClick={"rtf"}>Bad</button>
    </>
  );
};

export default App;
