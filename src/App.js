import './App.css';
import ApiCall from './components/API/apiCall';
import Form from './components/Home/Form';

function App() {
  const submitHandler = (activity, count) => {
    console.log(activity, count);
  };

  return (<>
    <ApiCall/>
    <Form onSubmit={submitHandler} />
  </>
     );
}

export default App;