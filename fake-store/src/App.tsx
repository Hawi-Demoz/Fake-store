import React from 'react';
import './App.css';

type Product = {
  id: number;
  title: string;
  price: number;
};

const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, title: 'Example Product', price: 9.99 },
    { id: 2, title: 'Another Product', price: 19.99 },
  ];

  return (
    <section>
      {products.map((p) => (
        <article key={p.id} style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}>
          <h2 style={{ margin: 0 }}>{p.title}</h2>
          <p style={{ margin: '4px 0' }}>${p.price.toFixed(2)}</p>
        </article>
      ))}
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Store</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
