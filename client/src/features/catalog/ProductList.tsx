import { Grid2 } from '@mui/material';
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";


interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <Grid2 container spacing={4}>
            {products.map(product => (
                <Grid2 xs={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid2>
            ))}
        </Grid2>
    )
}