// React component
import React from 'react';

const Product= ({ data }) => {
  return (
    <div className="product-data-table">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Client Name</th>
            <th>Project Start Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.clientName}</td>
              <td>{product.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;

