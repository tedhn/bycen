import { useState, FC, useEffect } from "react";

import "./Checkbox.scss";

interface PropsType {
  text: string;
  handleToggle: any;
}

const Checkbox: FC<PropsType> = ({ text, handleToggle }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleCheck = () => {
    setToggle(!toggle);
    handleToggle(!toggle, text);
  };

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <>
      <input type="checkbox" onChange={handleCheck} />
      <div>{text}</div>
    </>
  );
};

export default Checkbox;
