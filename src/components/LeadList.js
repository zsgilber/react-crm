import React from "react";
import Lead from "./Lead";

function LeadList(props) {
  return (
    <div>
    {props.leads.map(l => <Lead key={l.id} firstname={l.firstname} lastname={l.lastname} />)}
    </div>
  );
}

export default LeadList;
