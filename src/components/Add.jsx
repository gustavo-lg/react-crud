import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Add = () => {
    return (
        <div>
            <h1>ADD</h1>
            <Formik
                initialValues={{ name: '', price: '' }}
                validationSchema={yup.object({
                    product: yup.array().of(
                        yup.object({
                            name: yup.string().required('Name is required'),
                            price: yup.string().required('Price is required'),
                        })
                    )
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, error, touched, isSubmitting }) => (
                    <Form>
                       {values.product && 
                       values.product.lenght > 0 && 
                       values.product.map((product, index) => (
                        
                            <div className="row">
                                <div className="col">
                                    <Field type="name" name="name" placeholder="Camisa gola V" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="col">
                                    <Field type="price" name="price" placeholder="$50,00" />
                                    <ErrorMessage name="price" component="div" />
                                </div>
                            
                       
                                <div className="col">
                                    <button type="submit" disabled={isSubmitting}>
                                        ADD
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Add;