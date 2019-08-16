import React from 'react';

const Car = ({year, model, price}) => {
    return(
      <>
        <ul>
          <table className="table">
            <tr>
              <th>Year</th>
              <th>Model</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
            <tr>
                <td>{year}</td>
                <td>{model}</td>
                <td>${price}</td>
                <td><button className="button is-info">Buy Now</button></td>
            </tr>
          </table>
        </ul>
      </>
    )
  }
  export default Car;