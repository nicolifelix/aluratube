import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import Favorites from "../src/components/Favorites";
import Timeline from "../src/components/Timeline";

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

  