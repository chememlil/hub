import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CoworkingSpaces = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    axios.get('/api/coworking_spaces')
      .then(response => setSpaces(response.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      description: '',
      price_per_day: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      price_per_day: Yup.number().required('Required').positive().integer(),
    }),
    onSubmit: values => {
      axios.post('/api/coworking_spaces', values)
        .then(response => {
          setSpaces([...spaces, response.data]);
        });
    }
  });

  return (
    <div>
      <h1>Coworking Spaces</h1>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
        <input type="text" name="location" onChange={formik.handleChange} value={formik.values.location} />
        <textarea name="description" onChange={formik.handleChange} value={formik.values.description} />
        <input type="number" name="price_per_day" onChange={formik.handleChange} value={formik.values.price_per_day} />
        <button type="submit">Add Coworking Space</button>
      </form>
      <ul>
        {spaces.map(space => (
          <li key={space.id}>{space.name} - {space.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoworkingSpaces;
