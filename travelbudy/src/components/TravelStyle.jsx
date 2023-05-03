import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { images } from "../constants";
// import trips from "../data/trips.json";

const TravelStyle = () => {
  const card = {
    background: "aliceblue",
    border: "2px solid aqua",
    borderRadius: "25px",
    paddingLeft: "60px",
    marginBottom: "25px",
  };

  const margin = {
    marginLeft: "200px",
  };

  const form = {
    display: "flex",
    flexDirection: "row",
    width: "auto",
  };

  const posts = [
    { url: `${images.MainBg}`, title: "Main-bg" },
    { url: `${images.Boat}`, title: "Boat" },
    { url: `${images.Mountant}`, title: "Mountant" },
    { url: `${images.TravelGirl}`, title: "TravelGirl" },
  ];

  // Store sortby order i.e. ascending or descending
  const [sortType, setSortType] = useState("ascending");

  // Sortby field i.e. title or description
  const [sortByField, setSortByField] = useState("title");

  // Store filter/latest posts
  const [result, setResult] = useState();

  const [state, setstate] = useState({
    query: "",
    list: posts,
  });

  const media = {
    // Adding media query..
    "@media only screen and (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
      background: "red",
    },
  };

  // Filter posts on typing in search input
  const handleChange = (e) => {
    const results = posts.filter((post) => {
      if (e.target.value === "") return posts;
      return post[sortByField]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setResult(results);

    setstate({
      query: e.target.value,
      list: sortFunc(results, sortType, sortByField),
    });
  };

  // Sort posts depending on sort type and available results
  function sortFunc(results, sortType, sortByField) {
    if (sortType === "ascending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "descending") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function updatePosts(e) {
    setSortType(e);
    setstate({
      query: state.query,
      list: !result
        ? sortFunc(posts, e, sortByField)
        : sortFunc(result, e, sortByField),
    });
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function sortBy(e) {
    setSortByField(e);
    setstate({
      query: state.query,
      list: !result
        ? sortFunc(posts, sortType, e)
        : sortFunc(result, sortType, e),
    });
  }

  return (
    <div>
      <form style={form}>
        <div style={media}>
          <span style={margin}>Search</span>
          <input onChange={handleChange} value={state.query} type="search" />
        </div>

        <div style={media}>
          <span style={margin}>Sort By</span>
          <select
            defaultValue={"title"}
            onChange={(e) => sortBy(e.target.value)}
          >
            <option value="title" disabled>
              None
            </option>
            <option value="title">Title</option>
            <option value="description">Description</option>
          </select>
        </div>

        <div style={media}>
          <span style={margin}>Sort By</span>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => updatePosts(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              None
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </form>
      <ul>
        {posts.map((post) => {
          return (
            <div key={post.title}>
              {/* <h2>{post.title}</h2>
              <p>{post.description}</p> */}
              <Card
                image={images.Mountant}
                title="Recently Viewed Trips"
                date="October 28, 2022"
                price="100"
                places="32"
                countries="10"
              />
            </div>
          );
        })}

        {state.list.length === 0 && <h2>Empty List !!!</h2>}
      </ul>
    </div>
  );
};

export default TravelStyle;
