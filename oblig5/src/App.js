import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function App() {
  let todoItems = [{
    id: 1,
    tittel: "Dette må gjøres",
    beskrivelse:"Husk flekken",
    person: "trym",
    utfort: false,
    opprettet: "10.01.2020"
  },{
    id: 2,
    tittel: "Dette må gjøres2",
    beskrivelse:"Husk lekasjen",
    person: "kamil",
    utfort: false,
    opprettet: "10.01.2020"
  },{
    id: 3,
    tittel: "Så fort som mulig!!",
    beskrivelse:"Veldig viktig at dette skjer før alt annet",
    person: "abdi",
    utfort: false,
    opprettet: "10.01.2020"
  },{
    id: 4,
    tittel: "Ferdig test",
    beskrivelse:"Dont mine me",
    person: "Tester",
    utfort: "10.01.2020",
    opprettet: "10.01.2020"
  }]
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({ title: "" });
  const [todos, setTodos] = useState(todoItems);

  return (
    <div className="App">
      <FormTodo modal={modal}/>
      <div className="blurry">
        <h1>Liste over gjøremål</h1>
        <div id="todoWrapper">
          <Todos todos={todos} setTodos={setTodos}/>
        </div>
        <CreateTodoButton modal={modal} setModal={setModal}/>
        <h2 id="fuck">Fullførte gjøremål</h2>
        <TableDone todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

const FormTodo = ({modal})=>{

  const formSubmit = ()=>{
    return ""
  }

  const showHide =(modal)=>{
    var element = document.getElementById("modalBoks");
    if(modal)element.classList.remove("hidden");
    if(!modal)element.classList.add("hidden");
  }

  return (
    <>
    <div id="modalBoks" className="livmorhalskreft">
      <h3>Nytt gjøremål</h3>
    <form className="form-group">
        <label for="title">Title</label>
        <input value="Skolearbeid" type="text" id="title" name="title"/>
        <label for="author">Author</label>
        <input value="Trym" type="text" id="author" name="author"/>
        <label for="description">Description</label>
        <input value="Javascript" type="text" id="description" name="description"/>
        
    </form>
    <div id="flexthismorrapuler">
        <Button className="kukost">Bekreft</Button>
        <Button variant="btn-danger" className="kukost" onClick={()=>showHide(modal)}>Lukk</Button>
    </div>
        
    </div>
    </>
  );
}



const TableRow =({todo,removeSelf})=>{

  return(
  <tr>
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

const TableDone = ({todos,setTodos})=>{
  const addDone =(todo)=>{
    if(!todo.utfort)return;
    return <TableRow todo={todo} removeSelf={removeSelf}/>
  }

  const removeSelf = (id)=>{
    const updatedTodos = todos.filter(todo => todo.id != id)
    setTodos(updatedTodos)
  }


  return(
    <>
      <Table responsive>
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
      <Button variant="primary btn-lg btn-block" onClick={()=>modal?setModal(false):setModal(true)}>+ Legg til ny</Button>
    </>
  )
}

const Todos = ({todos, setTodos}) =>{ 

  const addTodos = (todo)=>{
    if(todo.utfort)return
    return <TodoCard todo={todo} addDone={addDone} removeSelf={removeSelf}/>
  }

  const makeDone = (todo)=>{
    if(todo=="feil")return
    const changed = todo
    changed.utfort ="10.01.2020"
    return changed;
  }

  const addDone = (id)=>{
    const todosFunct = todos.filter(todo => todo.id != id)
    const updatedTodos = todos.filter(todo => todo.id == id)
    const finishedList = updatedTodos.map(makeDone)
    setTodos(finishedList.concat(todosFunct))
    console.log(finishedList.concat(todosFunct))
  }

  const removeSelf =(id)=>{
    const nyListe = todos.filter(todo => todo.id != id)
    setTodos(nyListe)
  }

  return(
    todos.filter(todo => todo.utfort == false).map(todo => addTodos(todo))
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
