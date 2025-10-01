import Propss from "./Propss";
import Usestate from "./Usestate";

function App() {
  // bellow be passed as prop
  let arrFriend = [" satya ", " Deba ", " jhon "];
  let objBio = {
    age: 25,
    college: "ouat",
  };
  return (
    <>
      {/* All the Application task we do in the App only the App will go to the main.jsx */}
      <div>
        <h1>Hello Debabrata Hiii what u doing</h1>
      </div>
      {/* changing state through use state useState() */}
      <Usestate />
      {/* getting familiar with props here */}
      <Propss userName="" bio={objBio} friends={arrFriend} />
      <Propss userName="Debabrata" bio={objBio} friends={arrFriend} />
      <Propss userName="SatyaBrata Senapati" bio={objBio} friends={arrFriend} />
    </>
  );
}

export default App;
