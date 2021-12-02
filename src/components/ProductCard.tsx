import React, { createContext } from 'react';
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    initialValues?: InitialValues;
    onChange?: ( args: onChangeArgs ) => void;
    product: Product;
    style?: React.CSSProperties;
    value?:number;
}

export const ProductContext =  createContext({} as ProductContextProps)
const  { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } =  useProduct( { onChange, product, value, initialValues } );
    
    return (
        < Provider value= {{
            counter,
            maxCount,
            product,

            increaseBy
        }} >
            <div 
                className={`${ styles.productCard } ${ className }`}
                style= { style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }
            </div>
        </Provider>
    )
}

