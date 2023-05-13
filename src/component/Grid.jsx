import Reaategoryct, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMdShareAlt } from 'react-icons/io'


const Grid = ({ category, heading }) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://newsapi.org/v2/everything?q=${category}&apiKey=29f8e42efe874ee2be23f0d1edb6844b
        `
        }).then((res) => {
            setArticles(res.data.articles)
            console.log(res.data.articles.title);
        })

    }, []);
    return (
        <div className='main-title '>
            <div className='grid_box'>
                <h1>{heading}</h1>
                <div className='df'>
                    {
                        articles.slice('0', '15').map((value, index) => {
                            if (value.urlToImage != null) {
                                return (
                                    // <div className='sports'>
                                        <div className='grid'>
                                            <img src={value.urlToImage} alt="image" />
                                            <IoMdShareAlt className='share-grid' />
                                            <a>{value.title}</a>
                                        </div>
                                       
                                    // </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Grid