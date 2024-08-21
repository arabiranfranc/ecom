import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeItems";
import StoreItems from "../components/StoreItems";

const Store: React.FC = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
