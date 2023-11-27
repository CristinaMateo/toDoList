import { useState } from 'react';
import './App.css';
import Item from "./components/Item";
import { v4 as uuidv4 } from 'uuid';


function App() {


    //array inicial de tareas
    const initialData = [{
      title:"Hacer la cama", 
    },
    {
      title:"Ducharme",
    },
    {
      title:"Desayunar",
    },
    {
      title:"Lavarme los dientes",
    }
  ]

  const [data, setData] = useState({}); //Deseo actual
  const [list, setList] = useState(initialData); //[{}]lista deseos


  const deleteItem = (i) =>{
  
    const leftItems= list.filter((item,j)=> i!==j );
    setList(leftItems);
  };

  const clearItems = () =>{
    setList([]); //vaciar lista de deseos (state)
  }

  const resetItems = () =>{
    setList(initialData); //Recarga lista de deseos (state)
  }

  const paintItems = () => {
    //[{},{},{}] --> []
    //leer estado array deseos y deovlver array componente items
    return list.map((item, i) => (
      <Item
        key={uuidv4()} //index o identificador unico
        title={item.title}
        deleteItem={()=>deleteItem(i)}
      />
    )); //se le pasa un index para pintar?
  };
  
  const handleSubmit = (e) =>{
    
    const title = e.target.title.value
    
    const myItems = {title};
  
    const confirmated = confirm(`¿Desea crear el deseo "nombre: ${title}" ?`)
  
    if (confirmated){
      setData({ myItems }); //genera deseo {}
      setList([...list, myItems]); // [{}, {}] lista deseos
      alert("Tarea añadida");
    }
  
  };


  return (
    <>
      
      <h1>To do List</h1>

      <button onClick={clearItems}>Limpiar</button>
      <button onClick={resetItems}>Recargar</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Nombre</label><br />
        <input type="text" name="title" /><br />

        <button type="submit">Crear tarea</button>
      </form>

      <section>{paintItems()}</section>
      
    </>
  );

}

export default App
