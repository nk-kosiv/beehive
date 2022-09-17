import { useState } from "react";
import { Bee } from "../Bee/Bee";
import "./Beehive.scss";

const initialState = [
  { health: 100 },
  { health: 100 },
  { health: 100 },
  { health: 100 },
  { health: 100 },
];

export const Beehive = () => {
  const [, setShouldReset] = useState(false);

  const resetBeeHealth = () => setShouldReset(prev => !prev);

  return (
    <div className="beehive">
      <div className="beehive__reset">
        <button className="beehive__reset-button" onClick={resetBeeHealth}>
          Reset
        </button>
      </div>
      <section className="beehive__container">
        {initialState.map(({ health }, beeIndex) => (
          <Bee
            key={beeIndex.toString()}
            health={health}
            resetBeeHealth={resetBeeHealth}
          />
        ))}
      </section>
    </div>
  );
};
