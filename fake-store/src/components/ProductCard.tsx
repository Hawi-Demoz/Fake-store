import React from 'react';
import './productList.css';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-desc">{product.description.slice(0, 120)}{product.description.length>120 ? '…' : ''}</p>
        <div className="product-meta">{product.category}</div>
      </div>
    </article>
  );
}
