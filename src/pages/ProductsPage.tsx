import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IProduct } from "../models/IProduct";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const cartContext = useContext(CartContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  if (!cartContext) {
    throw new Error("cartContext is not defined");
  }
  const { addToCart } = cartContext;

  const handleAddToCart = (product: IProduct) => {
    console.log(product);
    // We have to send the above product to the context
    addToCart(product);
  };

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      console.log("fun ended");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <h1>Listing Products</h1>
      <div className="row">
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        )}
        {products.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
