import { useCallback, useState } from "react";
import "./accordion.css";
function Accordion({ items, onItemSelect, activeIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(activeIndex);

  return (
    <div className="ac-wrapper">
      {items.map((item, id) => {
        const isOpen = id === openIndex;

        return (
          <AccordionItem
            onItemSelect={onItemSelect}
            setOpenIndex={setOpenIndex}
            id={id}
            isOpen={isOpen}
            item={item}
            key={id}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({ item, isOpen, id, onItemSelect, setOpenIndex }) {
  const { title, content } = item;
  function handleItemSelect() {
    if (isOpen) {
      setOpenIndex(null);
      return;
    }
    setOpenIndex(id);
    onItemSelect(item);
  }
  return (
    <div className="ac-item-wrapper">
      <div className="ac-title-wrapper" onClick={handleItemSelect}>
        <div className="ac-title">{title} </div>
        <div className="ac-arrow-open"> v </div>
      </div>
      <div className={`ac-content ${isOpen ? "open" : ""}`}>{content} </div>
    </div>
  );
}

export default Accordion;
