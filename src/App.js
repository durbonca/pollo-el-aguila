import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';

function App() {

  const initial = {
    name: '',
    address: '',
    date: '',
    phone: '',
  }

  return (
    <div className="App">
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
