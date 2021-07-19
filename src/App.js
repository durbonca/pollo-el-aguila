import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { db } from './firebase';
import { Product } from './components/Product';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const initial = {
    name: '',
    address: '',
    date: '',
    phone: '',
  }

  const getProducts = async () => {
    const newProducts = [];
    await db.collection("productos").get().then((querySnapshot) => {
      querySnapshot.forEach( (doc) => {
          let { nombre, descripcion, precio, foto  } = doc.data();
          let id = doc.id;
          newProducts.push({
            id,
            nombre,
            descripcion,
            precio,
            foto
          });
        });
        setProducts(newProducts);
      },
      (error) => console.error(error)
    );
  }

  const handleProduct = (id, handler) => {
    let newCart = cart
    handler ? newCart.push(id) : newCart.splice(newCart.indexOf(id), 1);
    setCart(newCart);
    console.log(cart);
  }

  useEffect( () => { getProducts() } , [])

  return (
    <div className="App">
      
      { products.map( product => (
          <Product
            key={product.id}
            product={product}
            handleProduct={handleProduct}
          /> 
          )
        ) 
      }

      <h1>RESUMEN DEL PEDIDO</h1>

      <Formik
        onSubmit={values => console.log(values)}
        initialValues={initial}
      >
        <Form>
          <Field
            name="name"
            label="Nombre"
            as={TextField}
          />
          <Field
            name="address"
            label="Dirección"
            as={TextField}
          />
          <Field
            name="phone" 
            label="Telefono"
            as={TextField}
          />
        <Button type="submit" variant="contained" color="primary" size="large">
          Hacer Pedido
        </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
