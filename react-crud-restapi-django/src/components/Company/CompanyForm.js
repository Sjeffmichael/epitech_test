import React, { useEffect, useState } from "react";
import * as CompanyServer from "./CompanyServer";

const CompanyForm = (props) => {

  const initialState = { id: 0, name: "", foundation: "", website: "" };

  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!props.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();
        if (data.message === "Success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(props.id, company);
      }
      // history.push("/");
      console.log('Entro aqui');
      props.display_form('home');
    } catch (error) {
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.id) {
      getCompany(props.id);
    }
    else
      console.log(props.id)
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={company.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
        </div>  
        <div className="mb-3">
          <label className="form-label">Foundation year</label>
          <input type="number" name="foundation" value={company.foundation} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="url" name="website" value={company.website} onChange={handleInputChange} className="form-control" maxLength="100" required />
        </div>
        <div className="d-grid gap-2">
          {props.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
