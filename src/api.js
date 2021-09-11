//Base Url
const base_url = "https://api.rawg.io/api/";

//Get date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current Date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size_=10`;

const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popular_gamesURL = () => `${base_url}${popular_games}`;
export const upcoming_gamesURL = () => `${base_url}${upcoming_games}`;
export const new_gamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

//Searched Game

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=10`;
