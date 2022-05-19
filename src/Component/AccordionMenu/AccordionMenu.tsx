import { FC, useState } from "react";

interface PropsType {
  render: any;
}

const AccordionMenu: FC<PropsType> = ({ render }) => {
  const [active, setActive] = useState<boolean>(false);

  return <>{render(active, setActive)}</>;
};

export default AccordionMenu;
