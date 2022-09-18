import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Food from "./components/Food";
import { useState } from "react";
import axios from "axios";
import classNames from "classnames";

function App() {
  const [state, setState] = useState({
    foodName: "",
    foodImage: "",
    foodWebsite: "",
    foodYoutube: "",
  });

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    modal ? setModal(false) : setModal(true)
  }

  const appClass = classNames(
    "App",
   { 'modal-on': modal }
  )

  const handleFood = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.data)
      .then((data) => {
        setState((prev) => ({
          ...prev,
          foodName: data.meals[0].strMeal,
          foodImage: data.meals[0].strMealThumb,
          foodWebsite: data.meals[0].strSource,
          foodYoutube: data.meals[0].strYoutube,
        }));
      });
  };

  return (
    <div className={appClass}>
      {!modal && <Header name={state.foodName} image={state.foodImage} />}
      {state.foodImage && state.foodName && (
        <Food
          foodName={state.foodName}
          foodImage={state.foodImage}
          foodWebsite={state.foodWebsite}
          foodYoutube={state.foodYoutube}
          handleFood={handleFood}
          setModal={setModal}
          modal={modal}
          handleModal={handleModal}
        />
      )}
      {!modal && <Button message="Lets Eat!" handleFood={handleFood}/>}
    </div>
  );
}

export default App;
