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
  const [beehive, setBeehive] = useState(initialState);

  const resetBeehive = () => setBeehive(initialState);

  const handleBeeHealth = (beeIndex: number) => (reduction: number) =>
    setBeehive((prevBeehive) => {
      const newBeehive = structuredClone(prevBeehive);
      newBeehive[beeIndex].health -= reduction;

      return newBeehive;
    });

  return (
    <div className="beehive">
      <button className="beehive__reset" onClick={resetBeehive}>
        Reset
      </button>
      <section className="beehive__container">
        {beehive.map(({ health }, beeIndex) => (
          <Bee
            key={beeIndex.toString()}
            health={health}
            setBeeHealth={handleBeeHealth(beeIndex)}
          />
        ))}
      </section>
    </div>
  );
};
