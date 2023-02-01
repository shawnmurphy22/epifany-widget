import { useState, useEffect} from "react";
import './App.css';
import WidgetContainer from "./WidgetContainer";

function App() {
  const [slug, setSlug] = useState();
  const [id, setId] = useState();
  const [text, setText] = useState();
  useEffect( () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); // doesn't work in IE, but who cares ;)
    const slug = urlParams.get("slug");
    const id = urlParams.get("id");
    const text = urlParams.get("text");
    setSlug(slug);
    setId(id);
    setText(text);
  },[]);
  console.log(text);
  return (
      <WidgetContainer id={id} slug={slug} text={text}/>
  );
}

export default App;
