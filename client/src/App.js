import React, {useState, useEffect} from 'react';
import axios                        from "axios";



function App() {
   const [value, setValue] = useState('')
   useEffect(() => {      

      let response = axios.get(`http://localhost:8080/workouts`).then(response => response.data);

      console.log(response, '111')
   }, []);

   const onSubmit = () => {
      axios.post(`http://localhost:8080/workouts`, {title: value})
   }

   return (
      <div className="App">
         <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Send</button>
         </form>
      </div>
   );
}

export default App;
