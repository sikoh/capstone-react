import React from "react";
import { useState, useEffect } from "react";

// const base_url = "https://www.swapi.tech/api";
// const choices = ["films", "people", "planets", "species", "vehicles"];

function SwapiAPI(props) {
  const [choices, setChoices] = useState([]);
  const [selection, setSelection] = useState("");
  const [loadingChoices, setLoadingChoices] = useState(false);

  const [extraData, setExtraData] = useState([]);
  const [extraSelection, setExtraSelection] = useState("");
  const [loadingExtraData, setLoadingExtraData] = useState(false);

  const [details, setDetails] = useState();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const getChoices = async () => {
      try {
        setLoadingChoices(true);
        const { result } = await (
          await fetch("https://www.swapi.tech/api")
        ).json();

        setChoices(Object.keys(result));
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingChoices(false);
      }
    };

    getChoices();
  }, []);

  useEffect(() => {
    setExtraData([]);
    setExtraSelection("");
    const getData = async () => {
      try {
        console.log("::start");
        setLoadingExtraData(true);
        const { results } = await (
          await fetch(`https://www.swapi.tech/api/${selection}?limit=1000`)
        ).json();

        setExtraData(results);
        console.log("::end");
      } catch (err) {
        console.log(err);
      } finally {
        console.log("::finally");
        setLoadingExtraData(false);
      }
    };

    if (selection !== "Make a choice..." || selection !== "films") getData();
  }, [selection]);

  useEffect(() => {
    setShowDetails(false);
    if (extraData && extraData.length > 0) {
      const matchedDetails = extraData.find(
        (item) => item.name === extraSelection
      );
      setDetails(matchedDetails);
    }
  }, [extraSelection]);

  const handleClick = async () => {
    if (extraData && extraData.length > 0) {
      const matchedDetails = extraData.find(
        (item) => item.name === extraSelection
      );
      if (matchedDetails) {
        const { result } = await (await fetch(`${matchedDetails.url}`)).json();

        setDetails(result);
      }
    }

    console.log("btn", extraSelection, extraData);
    setShowDetails(true);
  };

  // console.log("::e", loadingExtraData);

  return (
    <div className="page-wrapper">
      <select onChange={(e) => setSelection(e.target.value)}>
        {loadingChoices && <option>Loading...</option>}
        {!loadingChoices && (
          <>
            <option>Select category...</option>
            {choices.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </>
        )}
      </select>

      {extraData?.length > 0 && (
        <select onChange={(e) => setExtraSelection(e.target.value)}>
          {loadingExtraData && <option>Loading additional...</option>}
          {!loadingExtraData && (
            <>
              <option>Select item...</option>
              {extraData.map((item) => (
                <option key={item.uid}>{item.name}</option>
              ))}
            </>
          )}
        </select>
      )}

      {extraSelection && <button onClick={handleClick}>Get more info</button>}

      {details && showDetails && (
        <pre>{JSON.stringify(details.properties, undefined, 2)}</pre>
      )}
    </div>
  );
}

export default SwapiAPI;
