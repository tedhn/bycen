import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./ProductList.scss";

interface PropsTypes {
  data: any;
}

const ProductList: FC<PropsTypes> = ({ data }) => {
  const navigate = useNavigate();
  const location: any = useLocation();

  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const [list, setList] = useState<any>(data);

  //rechecking total page after list is edited
  useEffect(() => {
    setTotalPage(Math.ceil(list.length / 5));
  }, [list]);

  // checking previously page before editing
  useEffect(() => {
    if (location.state) {
      setPage(Math.ceil((location.state.index + 1) / 5));
    }
  }, [location.state]);

  //function for edit event
  const handleEdit = (index: number) => {
    navigate("/edit", { state: { num: index + (page - 1) * 5 } });
  };

  //function for delete event
  const handleDelete = (index: number) => {
    const newList = [...list];

    newList.splice(index + (page - 1) * 5, 1);
    setList(newList);
  };

  return (
    <div className="ProductList">
      <div className="Label">
        <div>Process Title</div>
        <div>Subprocess Name</div>
        <div>Subprocess Name</div>
        <div>Action</div>
      </div>
      <div className="table">
        {list
          .slice((page - 1) * 5, page * 5)
          .map((item: any, index: number) => {
            const { Process, Subprocess, version } = item;

            return (
              <div key={index} className="row">
                <div>{Process.toUpperCase() + " Process"}</div>
                <div>{Subprocess} </div>
                <div>{Subprocess + "." + version}</div>
                <div className="button">
                  <div className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </div>
                  <div className="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="pages">
        {[...Array(totalPage)].map((x, i: number) => {
          return (
            <div key={i} className="button" onClick={() => setPage(i + 1)}>
              {i + 1}
            </div>
          );
        })}
      </div>

      <div onClick={() => navigate("/")} className="button">
        Back
      </div>
    </div>
  );
};

export default ProductList;
