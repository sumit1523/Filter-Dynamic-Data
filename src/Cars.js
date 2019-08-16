import React from 'react';
import Car from './Car';

const Cars = ({ type, list, isNew }) => {
  let sections = []
  let yearNow = 2019

  for (let car of list) {
    // console.log(yearNow - car.year);
    if (isNew && (yearNow - car.year <= 5)) {
      sections = sections.concat(<Car
        year={car.year}
        model={car.model}
        price={car.price} />)
    }
    else if (!isNew) {
      sections = sections.concat(<Car
        year={car.year}
        model={car.model}
        price={car.price} />)
    }
  }
  return (
    <div className="cars">
      <h2 className="title">{type}</h2>
      {sections.map(section => section)}
    </div>
  )
}
export default Cars;