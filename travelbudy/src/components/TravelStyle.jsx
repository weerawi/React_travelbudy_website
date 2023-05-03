import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { images } from "../constants";
import Trips from "../data/trips.json";
import { useMediaQuery } from "../hook/mediaquery";

const TravelStyle = () => {
  const searchBg = {
    container: (isRowBased) => ({
      margin: "1rem 3rem",
      background: "black",
      borderRadius: "25px",
      display: "flex",
      flexDirection: isRowBased ? "row" : "column",
      alignItems: "flex-start",
      padding: "64px",
      gap: "8px",
      position: " relative",
      justifyContent: "center",
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #101010",
      borderRadius: "64px",
    }),
  };

  const margin = {
    container: (isRowBased) => ({
      marginLeft: isRowBased ? "200px" : "100px",
      color: "lightgrey",
      marginRight: "1rem",
    }),
  };

  const input = {
    width: "200px",
    height: "2rem",
    margin: "10px 0",
  };

  const media = {
    container: (isRowBased) => ({
      // display: "flex",
      display: "grid",
      // flexDirection: isRowBased ? "" : "column",
      gridTemplateColumns: "repeat(auto-fill, minmax(410px, 1fr))",
      // flexDirection: isRowBased ? "row" : "column",
      justifyContent: "space-around",
    }),
  };
  // Store sortby order i.e. ascending or descending
  const [sortType, setSortType] = useState("ascending");

  // Sortby field i.e. title or description
  const [sortByField, setSortByField] = useState("title");

  // Store filter/latest posts
  const [result, setResult] = useState();

  const [state, setstate] = useState({
    query: "",
    list: Trips,
  });

  const isRowBased = useMediaQuery("(min-width: 1300px)");

  const searchBar = {
    justifyContent: "space-around",
  };

  // Filter posts on typing in search input
  const handleChange = (e) => {
    const results = Trips.filter((post) => {
      if (e.target.value === "") return Trips;
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
        ? sortFunc(Trips, e, sortByField)
        : sortFunc(result, e, sortByField),
    });
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function sortBy(e) {
    setSortByField(e);
    setstate({
      query: state.query,
      list: !result
        ? sortFunc(Trips, sortType, e)
        : sortFunc(result, sortType, e),
    });
  }

  return (
    <div>
      <form style={searchBg.container(isRowBased)}>
        <div style={searchBar}>
          <span style={margin.container(isRowBased)}> Search </span>
          <input
            style={input}
            onChange={handleChange}
            value={state.query}
            type="search"
          />
        </div>

        <div style={searchBar}>
          <span style={margin.container(isRowBased)}>Sort By</span>
          <select
            style={input}
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

        <div style={searchBar}>
          <span style={margin.container(isRowBased)}>Sort By</span>
          <select
            style={input}
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
      <div style={media.container(isRowBased)}>
        {Trips.map((trip) => {
          return (
            <Card
              image={images.Boat}
              title={trip.title}
              date={trip.date}
              price={trip.price}
              places={trip.places}
              countries={trip.countries}
            />
          );
        })}

        {state.list.length === 0 && <h2>Empty List !!!</h2>}
      </div>
    </div>
  );
};

export default TravelStyle;
