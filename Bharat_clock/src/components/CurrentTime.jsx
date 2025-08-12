import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const [rates, setRates] = useState({ INR: "-", GBP: "-" });

  // Time updater
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Currency API fetch
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setRates({ INR: data.rates.INR, GBP: data.rates.GBP });
      } catch (error) {
        console.error("Currency fetch error:", error);
      }
    };

    fetchRates(); // initial fetch
    const interval = setInterval(fetchRates, 60000); // update every 60 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="lead">
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
      <p>
        💲 1 USD = ₹{rates.INR} <br />
        💷 1 USD = £{rates.GBP}
      </p>
    </div>
  );
};

export default CurrentTime;
