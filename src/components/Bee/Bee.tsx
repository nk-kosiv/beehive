import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import beeImage from "../../assets/bee.png";
import "./Bee.scss";

export type BeeProps = {
  health: number;
  resetBeeHealth: () => void;
};

export const Bee: React.FC<BeeProps> = ({ resetBeeHealth, health }) => {
  const [beeHealth, setBeeHealth] = useState(health);
  const [reduceHealthBy, setReduceHealthBy] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const isBeeAlive = beeHealth > 0;

  const handleReduceBeeHealth = () => {
    setBeeHealth((prevHealth) => (prevHealth -= reduceHealthBy));
    setReduceHealthBy(0);

    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    setBeeHealth(health);
  }, [health, resetBeeHealth]);

  return (
    <div className={classNames("bee", { "bee--dead": !isBeeAlive })}>
      <img className="bee__image" src={beeImage} alt="bee" />
      <div className="bee__process">
        <input
          ref={inputRef}
          className="bee__process-input"
          disabled={!isBeeAlive}
          type="number"
          onChange={({ target }) => setReduceHealthBy(Number(target.value))}
          onKeyDown={(e) => e.key === "Enter" && handleReduceBeeHealth()}
        />
        <button
          className="bee__process-button"
          disabled={!isBeeAlive}
          onClick={handleReduceBeeHealth}
        >
          Reduce
        </button>
      </div>
      <div className="bee__status">
        <div className="bee__status-health">
          <span>{isBeeAlive ? `${beeHealth}%` : 0}</span>
        </div>
        <div className="bee__status-live">
          <span className="bee__status-live-text">
            {isBeeAlive ? "Alive" : "Dead"}
          </span>
        </div>
      </div>
    </div>
  );
};
