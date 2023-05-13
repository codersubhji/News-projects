import React, { useEffect, useState } from 'react'
import { IoMdShareAlt } from 'react-icons/io'
import axios from 'axios'

const Main = () => {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios({
            method: 'get',

            url: `https://newsapi.org/v2/top-headlines?category=politics&country=in&apiKey=29f8e42efe874ee2be23f0d1edb6844b
            `
        }).then((res) => {
            setArticles(res.data.articles)
        })
    }, []);
    return (
        <>
            <div>
                <div className="mainclass">
                    <div className="mainclass__left">
                        <div className="mainclass__left__title">
                            <h1>Breaking news</h1>
                        </div>
                        {
                            articles.slice('0', '1').map((value, index) => {
                                if (value.urlToImage != null) {
                                    return (
                                        <div className='mainclass__left__imgbox'
                                            key={index}
                                            onClick={() => {
                                                window.open(`${value.url}`, '_self')
                                            }}
                                        >
                                            <div className="mainclass__left__imgbox__img">
                                                <img src={value.urlToImage} alt={value.title} className='image' />
                                                <IoMdShareAlt className='share' />
                                            </div>
                                            <div className='descration'>
                                                <h4>{value.title}
                                                </h4>

                                            </div>

                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                    <div className="div__right">
                        <h1>Top Headline</h1>
                        <div className='div__right__topheading'>

                            {
                                articles.slice('2', '30').map((value, index) => {
                                    if (value.urlToImage != null) {
                                        return (
                                            <div className='div__right__title'
                                                key={index}
                                                onClick={() => {
                                                    window.open(`${value.url}`, '_self')
                                                }}
                                            >
                                                <div className="div__right__title__img">
                                                    <img src={value.urlToImage} alt={value.title} />
                                                    <IoMdShareAlt className='share-scroll' />

                                                </div>
                                                <div className="div__right__title__text">
                                                    <a>{value.title}</a>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Main;
