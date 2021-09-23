import React, {useState, createContext, useContext, useReducer} from 'react';
import data from './data';
import {initialState, setLocation, reducer, setName} from "./reducer";

const PersonContext = createContext()
const CrewContext = createContext()

const App = () => {
  // const [person, setPerson] = useState(data)
  const [person, dispatch] = useReducer(reducer, initialState)
  console.log(person)
  return (<div className="App component">
    <h1>Main App</h1>
    {/*Passing down our state props*/}
    <PersonContext.Provider value={[person, dispatch]}>
      <CrewContext.Provider value={{tag: 'Hommer'}}>
        <SubComp1/>
      </CrewContext.Provider>
    </PersonContext.Provider>
  </div>);
};

const SubComp1 = () => {
  const [person] = useContext(PersonContext)
  return (
    <div className='component'>
      <h1>Sub Component 1</h1>
      {/* Console logging our data we are able to see what we need to grab from our data */}
      <h3>Name: {person.name.title} {person.name.first} {person.name.last}</h3>
      <SubComp2/>
    </div>
  )
}


const SubComp2 = () => {
  const [person] = useContext(PersonContext)
  return (
    <div className='component'>
      <h1> Sub Component 2</h1>
      <h3>
        {person.location.street}
        <br/>
        {person.location.city}, {person.location.state} {person.location.postcode}
      </h3>
      <SubComp3/>
    </div>
  )
}

const SubComp3 = () => {
  const [person, dispatch] = useContext(PersonContext)
  const {tag} = useContext(CrewContext)
  
  const changeLocation = () => {
    dispatch(setLocation(
      {
        street: '188880 Malibu Point',
        city: 'Malibu',
        state: 'CA',
        postcode: '08265'
        
      }
    ))
  }
  
  
  const changeName = () => {
    dispatch(setName({
      title: 'DR.',
      first: 'Super',
      last: 'Mario'
    }))
  }
  
  return (
    <div className='component'>
      <h1>Sub Component 3</h1>
      <h3>{tag}</h3>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeLocation}>Change Address</button>
    </div>
  )
}

export default App;