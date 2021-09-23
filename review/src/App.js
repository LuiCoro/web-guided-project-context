import React, {useState , createContext , useContext} from 'react';
import data from './data';


const PersonContext = createContext()

const App = () => {
  const [person, setPerson] = useState(data)
  console.log(person)
  return (<div className="App component">
    <h1>Main App</h1>
    {/*Passing down our state props*/}
    <PersonContext.Provider value={[person, setPerson]}>
    <SubComp1 person={person} setPerson={setPerson}/>
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
      {/*<SubComp2 />*/}
    </div>
  )
}

//
// const SubComp2 = ({person, setPerson}) => {
//   return (
//     <div className='component'>
//       <h1> Sub Component 2</h1>
//       <h3>
//         {person.location.street}
//         <br/>
//         {person.location.city}, {person.location.state} {person.location.postcode}
//       </h3>
//       <SubComp3 person={person} setPerson={setPerson}/> />
//     </div>
//   )
// }
//
// const SubComp3 = ({person, setPerson}) => {
//
//   const changeLocation = () => {
//     setPerson({
//       ...person,
//       location: {
//         street: '188880 Malibu Point',
//         city: 'Malibu',
//         state: 'CA',
//         postcode: '08265'
//       }
//     })
//   }
//
//   const changeName = () => {
//     setPerson({
//       ...person,
//       name: {
//         title: 'DR.',
//         first: 'Super',
//         last: 'Mario'
//       }
//     })
//   }
//
//   return (
//     <div className='component'>
//       <h1>Sub Component 3</h1>
//       <button onClick={changeName}>Change Name</button>
//       <button onClick={changeLocation}>Change Address</button>
//     </div>
//   )
// }

export default App;