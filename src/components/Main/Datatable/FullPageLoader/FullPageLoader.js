import React from "react";
import { Button, Spinner } from "react-bootstrap";

const FullPageLoader = () => {
  return (
    <div className="">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default FullPageLoader;
