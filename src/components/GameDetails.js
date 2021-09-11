import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import playstation5 from "../img/playstation5.svg";
import xbox from "../img/xbox.svg";
import xboxSx from "../img/xboxSx.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import playinggame from "../img/playinggame.jpg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const history = useHistory();
  //Exit detail

  const extiDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  // GET Playform Images
  const getPlatform = (platform) => {
    return (
      {
        "PlayStation 4": playstation,
        "PlayStation 5": playstation5,
        "Xbox Series S/X": xboxSx,
        "Xbox S": xboxSx,
        "Xbox One": xbox,
        "Nintendo Switch": nintendo,
        PC: steam,
        iOS: apple,
      }[platform] || gamepad
    );
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={extiDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars(game.rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={
                  !game.background_image
                    ? playinggame
                    : smallImage(game.background_image, 1280)
                }
                alt="bgimage"
                loading="lazy"
              ></motion.img>
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={screen.image}
                  key={screen.id}
                  alt="game"
                  loading="lazy"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  @media (max-width: 670px) {
    padding: 1rem 0.5rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  @media (max-width: 670px) {
    h3 {
      display: inline;
    }
    img {
      width: 1rem;
      height: 1rem;
    }
    .rating {
      max-width: 10rem;
    }
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  h3 {
    padding: 1.5rem;
  }
  @media (max-width: 670px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    h3 {
      padding: 0.5rem;
    }
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    margin-right: 1rem;
  }
  @media (max-width: 670px) {
    img {
      margin-left: 0.5rem;
      margin-right: 0;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 670px) {
    margin-top: 1rem;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 670px) {
    margin: 1rem 0;
  }
`;
export default GameDetails;
