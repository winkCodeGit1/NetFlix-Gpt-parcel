import React from "react";
import { createRoot } from "react-dom/client";

const AppElement = () => {
  return <div className="font-bold text-3xl bg-green-500">Hi, It is a netflix app</div>;
};

const RootElem = document.getElementById("root");

const root = createRoot(RootElem);

root.render(<AppElement />);
