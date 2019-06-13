import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";

const CandyDispenser = () => {
  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = useState(initialCandies);

  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy));
  };
  const dispenseCallback = useCallback(dispense, []);

  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {!candies.length ? (
          <Button onClick={() => setCandies(initialCandies)} variant="primary">
            Refill
          </Button>
        ) : (
          <ul>
            {candies.map(candy => (
              <li key={candy}>
                <Button onClick={() => dispenseCallback(candy)} variant="info">
                  Grab
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CandyDispenser;
