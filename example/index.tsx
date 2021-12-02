import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
    id: '1',
    title: 'Coffee mug',
    //img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        key={product.id}
        initialValues={{
                count: 4,
                maxCount: 10
            }}
        product={ product }
      >

          {
              ( {reset, increaseBy, count, isMaxCountReached, maxCount} ) => (
                  <>
                      <ProductImage />
                      <ProductTitle />
                      <ProductButtons />
                  </>
              )
          }

      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
