import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccordionMenu from "../../Component/AccordionMenu/AccordionMenu";
import Checkbox from "../../Component/Checkbox/Checkbox";

import "./ProcessRegistration.scss";

interface PropsTypes {
  data: any;
}

const ProcessRegistration: FC<PropsTypes> = ({ data }) => {
  const [checkedOptions, setCheckedOptions]: Array<any> = useState<
    Array<string>
  >([]);
  const navigate = useNavigate();

  const handleSave = () => {
    console.log(checkedOptions);
  };

  //event handler when user toggles checkboxs
  const handleToggle = (toggle: boolean, text: string) => {
    let newList: Array<any> = [];

    if (toggle) {
      newList = checkedOptions.concat(text);
    } else {
      newList = checkedOptions.filter((item: string) => item !== text);
    }

    setCheckedOptions(newList);
  };

  return (
    <div className="ProcessRegistration">
      {data.map((data: any, index: any) => (
        <AccordionMenu
          key={index}
          render={(active: boolean, setActive: any) => {
            return (
              <>
                <div className="process" id="label">
                  <div onClick={() => setActive(!active)}>
                    {active ? "-" : "+"}
                  </div>
                  <Checkbox text={data.Process} handleToggle={handleToggle} />
                </div>
                {active && (
                  <>
                    {data.Subprocess.map((item: any, index: any) => {
                      const { name, version } = item;
                      return (
                        <AccordionMenu
                          key={index}
                          render={(active: boolean, setActive: any) => {
                            return (
                              <>
                                <div className="subprocess" id="label">
                                  <div onClick={() => setActive(!active)}>
                                    {active ? "-" : "+"}
                                  </div>
                                  <Checkbox
                                    text={name}
                                    handleToggle={handleToggle}
                                  />
                                </div>
                                {active && (
                                  <>
                                    {version.map((version: any, index: any) => (
                                      <div
                                        className="version"
                                        id="label"
                                        key={index}
                                      >
                                        <Checkbox
                                          text={name + "." + version}
                                          handleToggle={handleToggle}
                                        />
                                      </div>
                                    ))}
                                  </>
                                )}
                              </>
                            );
                          }}
                        />
                      );
                    })}
                  </>
                )}
              </>
            );
          }}
        />
      ))}
      <div onClick={() => navigate("/")} className="button">
        Back
      </div>
      <div onClick={handleSave} className="button">
        Save
      </div>
    </div>
  );
};

export default ProcessRegistration;
