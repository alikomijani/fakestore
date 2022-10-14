import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner = () => {
  return (
    <div
      style={{
        padding: 150,
        textAlign: "center",
      }}
    >
      <SyncLoader
        color={"#49beb7"}
        loading={true}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
