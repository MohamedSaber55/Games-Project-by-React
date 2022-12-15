import { createContext, useState ,} from "react";


export let CounterContext = createContext(0);

function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0);

    function incrementCounter(){
        setCounter(counter +1)
    }
    function decrementCounter(){
        setCounter(counter -1)
    }
    

    return <CounterContext.Provider value={{counter, incrementCounter, decrementCounter}}>
            {props.children}
    </CounterContext.Provider>
}


export default  CounterContextProvider


