import React, {useState, createContext, useContext} from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<PersonContext.Provider value={[person, setPerson]}>
        <div className="App component">
            <h1>Main App</h1>
            <SubComp1/>
        </div>
    </PersonContext.Provider>);
};

export default App;


const SubComp1 = ()=> {
    const [ person ] = useContext(PersonContext);

    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <p>{person.name.title}</p>
        <p>{person.name.first}</p>
        <p>{person.name.last}</p>

        <SubComp2/>
    </div>);
}

const SubComp2 = ()=> {
    const [ person, setPerson ] = useContext(PersonContext);
    
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
        <SubComp3/>
    </div>);
}

const SubComp3 = (props)=> {
    const [ person, setPerson ] = useContext(PersonContext);

    const handleClick = ()=> {
        setPerson({
            ...person,
            name: {
                first: "Warren",
                last: "Longmire",
                title: "hims"
            }
        });
    }

    return(<div className="component">
        <h1>Sub Comp 3</h1>
        <p>
        {person.location.street} {person.location.city}, {person.location.state}
        </p>
        <button onClick={handleClick}>Change Name</button>
        
    </div>);
}
