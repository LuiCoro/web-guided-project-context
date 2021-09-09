import React, {useState} from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson}/>
    </div>);
};

export default App;


const SubComp1 = (props)=> {
    const { person, setPerson } = props;
    
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <p>{person.name.title}</p>
        <p>{person.name.first}</p>
        <p>{person.name.last}</p>

        <SubComp2 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComp2 = (props)=> {
    const { person, setPerson } = props;
    console.log(person);
    const handleClick =()=> {
        setPerson({
            ...person,
            location: {
                city: "Philladelphia",
                state: "PA",
                postcode: "19111",
                street: "444 W 55st"
            }
        });
    }

    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 person={person} setPerson={setPerson}/>
    </div>);
}

const SubComp3 = (props)=> {
    const { person, setPerson } = props;

    const handleClick = ()=> {

    }

    return(<div className="component">
        <p>
        {person.location.street} {person.location.city}, {person.location.state}
        </p>
        <button onClick={handleClick}>Change Name</button>
        <h1>Sub Comp 3</h1>
    </div>);
}
