import React, { useState } from 'react';
import './productList.css';

const ProductList = ({ addToCart, cartItems }) => {
  const handleAddToCartClicked = (product) => {
    addToCart(product, 1);
  };

  const products = [
    {
      id: 1,
      name: 'PUBG',
      description:
        'Pouse em locais estratégicos, saqueie armas e suprimentos e sobreviva para se tornar a última equipe de pé nos mais variados campos de batalha. Forme um esquadrão e entrem no campo de batalha para a experiência de Battle Royale original que apenas PUBG: BATTLEGROUNDS pode oferecer.',
      price: 10.75,
      image: 'first-card.png',
    },
    {
      id: 2,
      name: 'Halo 5',
      description:
        'Halo 5: Guardians apresenta um emocionante multijogador com diversas modalidades, criação de níveis completa e um novo capítulo na saga do Master Chief. Os Spartans da Esquadra Osiris e Equipe Azul enfrentam uma força misteriosa em uma jornada que pode mudar o futuro da humanidade e do universo.',
      price: 250.72,
      image: 'second-card.png',
    },
    {
      id: 3,
      name: 'League of Legends',
      description:
        'League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.',
      price: 170.83,
      image: 'third-card.png',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p id={`price-${product.id}`} className="price">
            Preço: R${product.price}
          </p>
          <img src={product.image} alt={product.name} />
          <button onClick={() => handleAddToCartClicked(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
