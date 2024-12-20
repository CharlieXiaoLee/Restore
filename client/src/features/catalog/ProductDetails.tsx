import { Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

    }, [id])

    if (loading) return <h3>Loading...</h3>
    if (!product) return <h3>Product not found</h3>

    return (
        <Grid2 container spacing={6}>
            <Grid2 item='true' size={{ xs: 6 }}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '70%' }} />
            </Grid2>
            <Grid2 item='true' size={{ xs: 6 }}>
                <Typography variant="h3">{product.name}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h4">${(product.price / 100).toFixed(2)}</Typography>
                <Divider sx={{ mb: 2 }} />
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    name
                                </TableCell>
                                <TableCell>
                                    {product.name}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    description
                                </TableCell>
                                <TableCell>
                                    {product.description}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    type
                                </TableCell>
                                <TableCell>
                                    {product.type}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    quantity
                                </TableCell>
                                <TableCell>
                                    {product.quantityInStock}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
        </Grid2>
    )
}