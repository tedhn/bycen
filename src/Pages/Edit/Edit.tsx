import React, { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PropsType {
  data: any;
}

const EditPage: FC<PropsType> = ({ data }) => {
  const location: any = useLocation();
  const navigate = useNavigate();

  const { Process, Subprocess, version } = data[location.state.num];

  const [process, setProcess] = useState<string>(Process);
  const [subprocess, setSubprocess] = useState<string>(Subprocess);
  const [versionState, setVersion] = useState<string>(version);

  console.log(location.state);

  console.log(data[location.state.num]);

  const handleSave = () => {
    const newProcess = {
      Process: process,
      Subprocess: subprocess,
      version: versionState,
    };

    data.splice(location.state.num, 1, newProcess);

    navigate("/productlist", { state: { index: location.state.num } });
  };

  return (
    <div className="EditPage">
      <div className="input">
        <div>Process</div>
        <input
          value={process}
          onChange={(e: any) => setProcess(e.target.value)}
        />
        <div>Subprocess</div>
        <input
          value={subprocess}
          onChange={(e: any) => setSubprocess(e.target.value)}
        />
        <div>Version</div>
        <input
          value={versionState}
          onChange={(e: any) => setVersion(e.target.value)}
        />
      </div>

      <div className="button" onClick={handleSave}>
        Save
      </div>
    </div>
  );
};

export default EditPage;
