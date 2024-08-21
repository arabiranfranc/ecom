import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

const StoreItems: React.FC<StoreItemProps> = ({ id, name, price, img }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-2">
              <div className="d-flex align-items-center justify-content-center">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3 mx-2">{quantity}</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
