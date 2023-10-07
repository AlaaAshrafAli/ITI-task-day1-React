import React, { Component } from "react";
import "./Child.css";

export default class Child extends Component {
  render() {
    const { name, price, model, id } = this.props.products;
    return (
      <div className="col-md-4">
        <div className="card"> 
          <h4>{name}</h4>
          <p>Product Price: ${price}</p>
          <p>Product Model: {model}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-success"
              onClick={() => this.props.updatePriceHandler(this.props.index)}
            >
              Increase Price
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.props.deleteProductFunction(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
