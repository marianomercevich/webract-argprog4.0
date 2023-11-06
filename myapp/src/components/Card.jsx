import React from 'react'

export default function Card() {
  return (
<div className="card" style={{ width: "18rem" }}>
  <img src="https://lamoto.com.ar/wp-content/uploads/2022/11/Royal-Enfield-Super-Meteor-650-2023-ambiente.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Royal enfield meteor 650</h5>
    <p className="card-text">
    descripcion : La nueva Super Meteor 650 utiliza el mega reconocido motor bicilíndrico en paralelo desarrollado por Royal Enfield de 648 cc y cigüeñal calado a 270°, exquisito a la vista y de entrega de potencia súper lineal.
    <hr />
      Precio: U$D 6500.-
    <hr />    
      SKU: metor6502023
      <hr />
      Cantidad disponible: 100
    </p>
    <a href="#" className="btn btn-primary">
      comprar
    </a>
  </div>
</div>


  )
}
