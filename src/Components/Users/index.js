import React from 'react'
import './style.css';

 

function Users() {
  const [inputValue, setInputValue]=React.useState();
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const showUser = () => {
    setLoading(true)
      fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users").then((response) => 
        response.json()).then((user) => {
          setUsers(user);

        }).finally(() => {
    setLoading(false)
  })
     
  }
  const info = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  const post = () => {
       const user=  {
      "name": inputValue,
    }
         fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users",{
    method: "POST",
    headers: {
           "Content-Type": "application/json",
        },
    body: JSON.stringify(user),
    })
    
  }
  
  return (
    <>
      <input placeholder='name' onChange={info}></input>
      <button onClick={post}>Send</button>
      <button onClick={showUser}>Show</button>
      {loading ? <h1 className='load'>loading....</h1> : 
       <div>
        {users.map(({name,id}) => (
          <h5 className='user' key={id}>
           {id}  {name} 
          </h5>
        ))}
   
        </div>
      }
     
    
    </>
 
  );
}

export default Users