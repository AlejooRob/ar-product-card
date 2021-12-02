import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
    test('Mostrar el componente correctamente con el título perzonalizado',() => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class"/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Mostrar el componente con el nombre del producto', () =>{
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
});
