import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({hideButtons=false}) {

    const [input,setInput]=useState('');
    const navigate=useNavigate();
    const [{},dispatch]=useStateValue();

    const search=e=>{
        e.preventDefault();
        console.log("hi");
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input,
        })
        navigate('/search');
    }
    return (
        <form className='search'>
        <div className="search__input">
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <MicIcon/>
        </div>
        {!hideButtons?(
            <div className='search__buttons'>
            <Button type='submit' onClick={search}>Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        ):(<div className='search__buttonsHidden'>
            <Button type='submit' onClick={search}>Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>)}
            
        </form>
    )
}

export default Search
