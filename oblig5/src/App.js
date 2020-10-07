import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function App() {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ tittel: "" ,beskrivelse:"",person:"",utfort:"",opprettet:""});
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      {modal&&<FormTodo modal={modal} setModal={setModal} todoslength={todos.length} setTodos={setTodos} todos={todos} formData={formData} setFormData={setFormData}/>} 
        <h1 className={modal&&"blurry"}>Liste over gjøremål</h1>
        <div className={modal&&"blurry"} id="todoWrapper">
          <Todos className={modal&&"blurry"} todos={todos} setTodos={setTodos}/>
        </div>
        <CreateTodoButton className={modal&&"blurry"} modal={modal} setModal={setModal}/>
        <h2 className={modal&&"blurry"} id="fuck">Fullførte gjøremål</h2>
        <TableDone className={modal&&"blurry"} todos={todos} setTodos={setTodos} modal={modal}/>
    </div>
  );
}

const FormTodo = ({setModal,setFormData,formData,todoslength,todos,setTodos})=>{
  let tittel;
  let person;
  let beskrivelse;

  const setTittel =(formTittel)=> {
    console.log(formTittel)
    tittel=formTittel;
  }

  const setPerson =(formPerson)=> {
    person=formPerson;
  }

  const setBeskrivelse =(formBeskrivelse)=> {
    beskrivelse=formBeskrivelse;
  }

  const formSubmit = ()=>{
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    today = mm + '.' + dd + '.' + yyyy;
    
    setTodos([
      ...todos,{
        id: todoslength + 1,
        tittel: tittel,
        beskrivelse: beskrivelse,
        person: person,
        utfort: false,
        opprettet: today
      }]
    )

    setModal(false) 
  }


  return (
    <>
    <div id="modalBoks" className="livmorhalskreft">
      <h3>Nytt gjøremål</h3>
    <form className="form-group">
        <label >Title</label>
        <input onChange={(e) => { setTittel(e.target.value)}} type="text" id="title" />
        <label >Author</label>
        <input onChange={(e) => { setPerson(e.target.value)}} type="text" id="author" />
        <label>Description</label>
        <textarea onChange={(e) => { setBeskrivelse(e.target.value)}} type="text" id="description" maxength="50" />
        
    </form>
    <div id="flexthismorrapuler">
        <Button className="kukost" onClick={()=>formSubmit()}>Bekreft</Button>
        <Button variant="btn-danger" className="kukost" onClick={()=>setModal(false)}>Lukk</Button>
    </div>
        
    </div>
    </>
  );
}



const TableRow =({todo,removeSelf,modal})=>{

  return(
  <tr className={modal&&"blurry"} >
    <th scope="row">{todo.id}</th>
    <td>{todo.tittel}</td>
    <td>{todo.beskrivelse}</td>
    <td>{todo.person}</td>
    <td>{todo.utfort}</td>
    <td>{todo.opprettet}</td>
    <Button variant="btn btn-danger" onClick={()=>removeSelf(todo.id)}>Slett</Button>
  </tr>
    
  );
}

const TableDone = ({todos, modal, setTodos})=>{
  const addDone =(todo)=>{
    if(!todo.utfort)return;
    return <TableRow modal={modal} todo={todo} removeSelf={removeSelf}/>
  }

  const removeSelf = (id)=>{
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }


  return(
    <>
      <Table responsive className={modal&&"blurry"} >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tittel</th>
          <th scope="col">Beskrivelse</th>
          <th scope="col">Laget av</th>
          <th scope="col">Utført</th>
          <th scope="col">Opprettet</th>
          <th scope="col">Slette</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(addDone)}
      </tbody>
      </Table>
    </>
  );
}

const CreateTodoButton = ({ modal, setModal}) =>{

  return(
    <>
      <Button className={modal&&"blurry"} variant="primary btn-lg btn-block" onClick={()=>modal?setModal(false):setModal(true)}>+ Legg til ny</Button>
    </>
  )
}

const Todos = ({todos, setTodos}) =>{ 

  const addTodos = (todo)=>{
    if(todo.utfort)return
    return <TodoCard todo={todo} addDone={addDone} removeSelf={removeSelf}/>
  }

  const makeDone = (todo)=>{
    if(todo==="feil")return
    const changed = todo
    changed.utfort ="10.01.2020"
    return changed;
  }

  const addDone = (id)=>{
    const todosFunct = todos.filter(todo => todo.id !== id)
    const updatedTodos = todos.filter(todo => todo.id === id)
    const finishedList = updatedTodos.map(makeDone)
    setTodos(finishedList.concat(todosFunct))
    console.log(finishedList.concat(todosFunct))
  }

  const removeSelf =(id)=>{
    const nyListe = todos.filter(todo => todo.id !== id)
    setTodos(nyListe)
  }

  return(
    todos.filter(todo => todo.utfort === false).map(todo => addTodos(todo))
  );
};


const TodoCard = ({todo, removeSelf,addDone})=>(

  <>
  <Card>
      <Card.Body>
        <Card.Title>{todo.tittel}</Card.Title>
        <Card.Text>
          {todo.beskrivelse}
        </Card.Text>
        <Button variant="primary" onClick={()=>addDone(todo.id)}>Fullfør</Button>
        <Button variant="primary btn-danger" onClick={()=>removeSelf(todo.id)}>Slett</Button>
      </Card.Body>
    </Card>
  </>
);
