import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import Favorites from "../src/components/Favorites";

function HomePage() {
  const [valorDoFiltro, setvalorDoFiltro] = React.useState("");
  // const valorDoFiltro = "Frost";

    return (
     <>
     <CSSReset />
      <div>
        <Menu valorDoFiltro={valorDoFiltro}  setvalorDoFiltro={setvalorDoFiltro}/>
        <Header />
        <Timeline  searchValue={valorDoFiltro} playlists={config.playlists}/>
        <Favorites favorites={config.favorites}/>
      </div>
     </>
        
    )
  }
  
  export default HomePage

  const StyledHeader = styled.div`
    .user {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  `;
  function Header(){
    return(
      <StyledHeader>
       <Banner />
        <section className="user-info">
          <img className="user" src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </section>
      </StyledHeader>
    )
  }

  function Timeline({searchValue, ...props}){
    // console.log('props', props);
    const playlistNames = Object.keys(props.playlists);
    return(
      <StyledTimeline>
        {playlistNames.map((playlistName) => {
          const videos = props.playlists[playlistName]
          // console.log(videos);
          // console.log(playlistNames);
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {
                  videos.filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalized = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalized)
                  }).map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>
                          {video.title}
                        </span>
                      </a>
                    )
                  })
                }
              </div>
            </section>
          )
        })}
      </StyledTimeline>
    )
  }