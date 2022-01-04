import React from 'react'
import {useStateValue} from '../StateProvider'
import Search from '../Components/Search'
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from 'react-router-dom'
import './SearchPage.css';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
    const [{term},dispatch]=useStateValue();
    const data=useGoogleSearch(term);
    // const data=Response;
    console.log(data)
    return (
        <div className='SearchPage'>
            <div className="searchPage__header">
                <Link to='/'><img className='searchPage__logo'
                src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Google" /></Link>
                <div className="searchPage__headerBody">
                        <Search hideButtons={true} />
                <div className="searchPage__options">
                <div className="searchPage__optionsLeft">
                    <div className="searchPage__option">
                    <SearchIcon/>
                        <Link to='/all'>All</Link>
                    </div>
                    <div className="searchPage__option">
                    <NewspaperIcon/>
                        <Link to='/news'>News</Link>
                    </div>
                    <div className="searchPage__option">
                    <PhotoSizeSelectActualIcon/>
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className="searchPage__option">
                    <LocalOfferIcon/>
                        <Link to='/shopping'>shopping</Link>
                    </div>
                    <div className="searchPage__option">
                    <LocationOnIcon/>
                        <Link to='/location'>Location</Link>
                    </div>
                    <div className="searchPage__option">
                    <MoreVertIcon/>
                        <Link to='/more'>More</Link>
                    </div>
                </div>
                <div className="searchPage__optionsRight">
                    <div className="searchPage__option">
                        <Link to='/settings'>Setting</Link>
                    </div>
                    <div className="searchPage__option">
                        <Link to='/tools'>Tools</Link>
                    </div>
                </div>
                </div>  
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                <p className='searchPage__resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>
                {data?.items.map(item=>{
                    return (<div className='searchPage__result'>
                    
                        <a href={item.link}>{item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                            <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt="s"/>
                        )}{item.displayLink}</a>
                        <a className='searchPage__resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className='searchPage__resultSnippet'>
                            {item.snippet}
                        </p>
                    </div>)
                })}
            
    

            </div>
            )
            }
            
        </div>
    )
}

export default SearchPage
