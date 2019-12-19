import React                               from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import styles                              from './AddWorkoutForm.module.scss'
import { Button, Input } from 'antd';

export const AddWorkoutForm = ({addWorkoutItem}) => (
   <div>
      <h1>Add new workout</h1>
      <Formik
         initialValues={{title: ''}}
         validate={values => {
            const errors = {};
            if (!values.title) {
               errors.title = 'Required';
            }
            return errors;
         }}
         onSubmit={(values, actions) => {
            addWorkoutItem(values.title)

            setTimeout(() => {
               /*alert(JSON.stringify(values, null, 2));*/
               actions.resetForm({});
               actions.setSubmitting(false);
            }, 1000);


         }}
      >
         {({isSubmitting, errors}) => (
            <Form>
               <Field type="text" name="title" render={({ field }) => {
                  return <Input {...field} style={{ width: '30%' }}  placeholder="Workout name" />
               }}/>
               <ErrorMessage name="title" component="div" className={styles.errorMessage}/>
               
              {/* <Field as="select" name="color">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
               </Field>*/}
               <Button type="primary" htmlType="submit" disabled={isSubmitting}>Send</Button>
            </Form>
         )}
      </Formik>
   </div>
);