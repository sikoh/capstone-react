import React from "react";

import SwapiAPI from "../components/widgets/SwapiAPI";

export default function SwapiPage() {
  return (
    <div className="page-wrapper">
      <p>
        Select from the drop down menus and press the button to get more
        information about the selected option.
        <br />
        Notes: Currently we do not have data for films. The loading of the
        second menu might take a sec.
      </p>
      <SwapiAPI />
    </div>
  );
}
