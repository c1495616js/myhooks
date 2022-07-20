import React from "react";

import { useExample } from "myhook";

const App = () => {
  const example = useExample();
  return <div>{example}</div>;
};
export default App;
