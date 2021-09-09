import React, { useState } from "react";
import FamilyContext from './contexts/FamilyContext';

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export default function App() {
  const { Provider } = FamilyContext;

  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(family => (
          <button
            className={`family-button ${family.familyName ===
              activeFamily.familyName && "active"}`}
            key={family.familyName}
            onClick={() => setActiveFamily(family)}
          >
            {family.familyName}
          </button>
        ))}
      </section>

      <Provider value={activeFamily}>
        {activeFamily && <FamilyTree />}
      </Provider>
    </div>
  );
}