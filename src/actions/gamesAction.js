import axios from "axios";
import {
  popular_gamesURL,
  upcoming_gamesURL,
  new_gamesURL,
  searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularGames = await axios.get(popular_gamesURL());
  const upcomingGames = await axios.get(upcoming_gamesURL());
  const newGames = await axios.get(new_gamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
