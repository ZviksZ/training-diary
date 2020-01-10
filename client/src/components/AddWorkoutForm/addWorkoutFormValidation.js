import * as Yup from "yup";

export const AddWorkoutSchema = Yup.object().shape({
   title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
   workoutType: Yup.string().required('Type is required!'),
   exercises: Yup.array().of(
      Yup.object().shape({
         exercise: Yup.string().min(2).max(10).required('Name is required'),
         rounds: Yup.number().min(1),
         repeats: Yup.number().min(1)
      })
   )
});