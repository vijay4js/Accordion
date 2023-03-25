import "./styles.css";
import Accordion from "./components/Accordion";
import { items } from "./mocks";

export default function App() {
  function onItemSelect(item) {
    console.log("Selected item ", item);
  }

  return (
    <div className="App">
      <Accordion items={items} onItemSelect={onItemSelect} activeIndex={0} />
    </div>
  );
}
