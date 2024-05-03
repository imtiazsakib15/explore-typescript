{
  // Unknown Type usage
  const getMeterPerSecond = (value: unknown): void => {
    if (typeof value === "number") {
      const meterPerSecond = (value * 1000) / 3600;
      console.log(meterPerSecond + " mps");
    }
    if (typeof value === "string") {
      const [kph] = value.split(" ");
      const meterPerSecond = (parseFloat(kph) * 1000) / 3600;
      console.log(meterPerSecond + " mps");
    }
  };
  getMeterPerSecond(1000);
  getMeterPerSecond(`1000 kph`);
}
