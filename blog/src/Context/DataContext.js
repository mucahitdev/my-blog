import {useState, createContext,useEffect,useContext} from 'react';

const DataContext = createContext();

export const DataPrivider = ({children})=>{
    const [data, setData] = useState(localStorage.getItem("data") || navigator.language);

    useEffect(() => {
      
    localStorage.setItem("data",data)
   
    }, [data])

    

    const values = {
        data,
        setData
    }

    return <DataContext.Provider value={values} >{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)
