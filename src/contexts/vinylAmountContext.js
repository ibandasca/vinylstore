import React, { createContext, useState } from "react";

const VinylAmountContext = createContext([]);

const VinylAmountProvider = ({ children }) => {
  const [vinylsAdded, setVinylsAdded] = useState([]);

  return (
    <VinylAmountContext.Provider
      value={{
        vinylsAdded,
        setVinylsAdded,
      }}
    >
      {children}
    </VinylAmountContext.Provider>
  );
};

export { VinylAmountContext, VinylAmountProvider };
