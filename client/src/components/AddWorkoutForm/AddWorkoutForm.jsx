import React                                           from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import {InputField}                                    from "../common/InputField/InputField.jsx";
import style                                           from './AddWorkoutForm.module.scss'
import {Button, Input}                                 from 'antd';
import {generate}                                      from "shortid";
import {AddWorkoutSchema}                              from "./addWorkoutFormValidation.js";


export const AddWorkoutForm = ({addWorkoutItem}) => {
   return (
      <div className={style.addFormContainer}>
         <h2 className={style.addFormTitle}>Add new workout</h2>
         <Formik
            initialValues={{
               title: '',
               workoutType: '',
               exercises: [{
                  id: generate(),
                  exercise: 'Box',
                  rounds: '1',
                  repeats: '10'
               }]
            }}
            validationSchema={AddWorkoutSchema}
            onSubmit={(values, actions) => {
               addWorkoutItem(values.title, values.workoutType, values.exercises)

               setTimeout(() => {
                  actions.resetForm({});
                  actions.setSubmitting(false);
               }, 1000);
            }}
         >
            {({isSubmitting, values, errors}) => (
               <Form>
                  <Field type="text"
                         name="title"
                         style={{width: '30%'}}
                         component={InputField}/>

                  <Field component="select" name="workoutType">
                     <option value="" label="Select workout type"/>
                     <option value="quick">Quick</option>
                     <option value="strength">Strength</option>
                     <option value="cardio">Cardio</option>
                  </Field>
                  
                  <ErrorMessage name="workoutType" component="div" className={style.errorMessage}/>

                  <FieldArray name="exercises">
                     {({push, remove}) => (
                        <div>
                           {values.exercises.map((p, index) => {
                              return (
                                 <div key={p.id}>
                                    <h3 className={style.addFormSubtitle}>Exercise</h3>
                                    <Field
                                       name={`exercises[${index}].exercise`}
                                       type="text"
                                       component={InputField}
                                    />
                                    <Field
                                       name={`exercises[${index}].rounds`}
                                       type="number"
                                       className={style.numberField}
                                       component={InputField}
                                    />
                                    <Field
                                       name={`exercises[${index}].repeats`}
                                       type="number"
                                       className={style.numberField}
                                       component={InputField}
                                    />
                                    {
                                       index > 0 && <div onClick={() => remove(index)}> DELETE </div>
                                    }

                                 </div>
                              );
                           })}
                           <Button
                              type="primary"
                              onClick={() =>
                                 push({id: generate(), exercise: "", rounds: "", repeats: ""})
                              }
                           >
                              add to list
                           </Button>
                        </div>
                     )}
                  </FieldArray>

                  <pre>{JSON.stringify(values, null, 2)}</pre>
                  <pre>{JSON.stringify(errors, null, 2)}</pre>

                  <Button type="primary" htmlType="submit" disabled={isSubmitting}>Send</Button>

               </Form>
            )}
         </Formik>
      </div>
   )
}