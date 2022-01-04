import {useState,useEffect} from 'react'
import API_KEY from './keys'
const CONTEXT_KEY="3efef08e89ec0e1a9";

const useGoogleSearch=(term)=> {

    const [data,setData]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(res=>res.json()).then(result=>setData(result))       
        }
        fetchData();

    },[term])

    console.log(data)

    return data;
    
}

export default useGoogleSearch
