import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axios({
            method: "get",
            url: `https://newsapi.org/v2/everything?q=${query}&apiKey=29f8e42efe874ee2be23f0d1edb6844b`,
        }).then((res) => {
            setNews(res.data.articles);
        });
    }, [query]);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);
        if(value<1){
            document.querySelector(".SearchResult").classList.add("d-n")
          }
          else{
            document.querySelector(".SearchResult").classList.remove("d-n") 
          }
    };

    let searchResults = null;
    if (news != undefined) {
        if (news.length > 0) {
            searchResults = (
                <ul className="result-box SearchResult ">
                    {news.slice("0", "5").map((news, index) => (
                        <li
                            key={index}
                            className=" search-box  "
                            onClick={() => {
                                window.open(news.url, "_blank");
                            }}
                        >
                            <img
                                className="search-img "
                                src={news.urlToImage}
                                alt={news.title.slice("0", "5")}
                            />
                            <h5 >{news.title}</h5>
                        </li>
                    ))}
                </ul>
            );
        }
    } else {
        searchResults = <p>No news found!!!</p>;
    }
    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <BiSearchAlt className="inp_btn__Search_icon" />

            {searchResults}
        </>
    );
};

export default Search;
