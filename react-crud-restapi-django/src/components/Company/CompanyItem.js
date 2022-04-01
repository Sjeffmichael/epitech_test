import React from "react";
import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies, display_form}) => {
  const handleDelete = async (companyId) => {
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          <a>
            
          </a>
          {company.name}
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="ms-2 btn btn-sm btn-info">
            Go to website
          </a>
        </h3>
        <p className="card-text">
          Founded in: <strong>{company.foundation}</strong>
        </p>
        {/* <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Go to website
        </a> */}
        <button onClick={() => display_form(company.id)} className="btn btn-primary">
          Update Company
        </button>
        <button onClick={() => company.id && handleDelete(company.id)} className="btn btn-danger my-2">
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
