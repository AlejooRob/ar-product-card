# AR-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alejandro Robles

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ar-product-card'
```

```

<ProductCard
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
```
