import { Container } from "@material-ui/core";

export function Product({product}) {
    return (
        <Container>
            <>{product.foto}</>
            <>{product.nombre}</>
            <>{product.precio}</>
            <>{product.descripcion}</>
        </Container>
    )
}
