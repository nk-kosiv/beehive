import { useState } from "react";
import { Bee } from "../Bee/Bee";
import "./Beehive.scss";

type BeehiveProps = {
  beehive: { health: number }[];
};

export const Beehive: React.FC<BeehiveProps> = ({ beehive }) => {
  const [shouldReset, setShouldReset] = useState(false);

  const resetBeeHealth = () => setShouldReset((prev) => !prev);

  return (
    <div className="beehive">
      <div className="beehive__reset">
        <button className="beehive__reset-button" onClick={resetBeeHealth}>
          Reset
        </button>
      </div>
      <section className="beehive__container">
        {beehive.map(({ health }, beeIndex) => (
          <Bee
            key={beeIndex.toString()}
            health={health}
            shouldReset={shouldReset}
          />
        ))}
      </section>
    </div>
  );
};
