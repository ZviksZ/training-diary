import React                               from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import s                                   from './AddWorkoutForm.module.scss'
import {Button, Input}                     from 'antd';
import * as Yup                            from 'yup';

const SignupSchema = Yup.object().shape({
   title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
   workoutType: Yup.string().required('Type is required!')
});

export const AddWorkoutForm = ({addWorkoutItem}) => (
   <div>
      <h2>Add new workout</h2>
      <Formik
         initialValues={{title: '', workoutType: ''}}
         validationSchema={SignupSchema}
         onSubmit={(values, actions) => {
            addWorkoutItem(values.title)

            setTimeout(() => {
               actions.resetForm({});
               actions.setSubmitting(false);
            }, 1000);
         }}
      >
         {({isSubmitting}) => (
            <Form>
               <Field type="text"  name="title" render={({field}) => {
                  return <Input {...field} onBlur={(e) => e.preventDefault()} style={{width: '30%'}} placeholder="Workout name"/>
               }}/>
               <ErrorMessage name="title" component="div" className={s.errorMessage}/>

               <Field component="select" name="workoutType">
                  <option value="" label="Select workout type" />
                  <option value="quick">Quick</option>
                  <option value="strength">Strength</option>
                  <option value="cardio">Cardio</option>
               </Field>
               <ErrorMessage name="workoutType" component="div" className={s.errorMessage}/>
               
               
               <Button type="primary" htmlType="submit" disabled={isSubmitting}>Send</Button>
            </Form>
         )}
      </Formik>
   </div>
);