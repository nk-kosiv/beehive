import { useEffect, useState } from "react";
import classNames from "classnames";
import beeImage from "../../assets/bee.png";
import "./Bee.scss";

export type BeeProps = {
  health: number;
  shouldReset: boolean;
};

export const Bee: React.FC<BeeProps> = ({ shouldReset, health }) => {
  const [beeHealth, setBeeHealth] = useState(health);
  const [reduceHealthNumber, setReduceHealthNumber] = useState<number | string>('');
  
  const isBeeAlive = beeHealth > 0;

  const handleReduceBeeHealth = () => {
    setBeeHealth((prevHealth) => (prevHealth -= Number(reduceHealthNumber)));
    setReduceHealthNumber('');
  };

  useEffect(() => {
    setBeeHealth(health);
  }, [health, shouldReset]);

  return (
    <div className={classNames("bee", { "bee--dead": !isBeeAlive })}>
      <img className="bee__image" src={beeImage} alt="bee" />
      <div className="bee__process">
        <input
          value={reduceHealthNumber}
          className="bee__process-input"
          disabled={!isBeeAlive}
          type="number"
          onChange={({ target }) => setReduceHealthNumber(Number(target.value))}
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
