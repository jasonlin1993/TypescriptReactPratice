import React, { useState } from "react";
import "./App.css";

// type TitleProps = {
//   name: string;
// };

interface TitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return <p>{name}</p>;
};

const App: React.FC = () => {
  const [title, setTitle] = useState<number | string>;
  return (
    <div>
      <Title name="Jason"></Title>
    </div>
  );
};

export default App;
