useEffect hook in React is a function that allows developers to perform side effects in a functional component. This can include things like data fetching, updating the DOM, and timers

useEffect which runs without dependencies will re-render everytime the state has changed, one such Example is :

    useEffect( ()=> {
        console.log("UseEffect called")
    });

useEffect takes in dependencies in the form of array, this will re-render everytime the state of the items mentioned in the array changes.
This time the re-render is specific to only change in state of the following items mentioned in the Example : 

    const [number, setNum] = useState(1);
    
    useEffect( ()=> {
        console.log("UseEffect called", number)
    }, [number]);

//setNum being called to update number
<button onClick={ () => setNum(number+1) }>Click</button>
