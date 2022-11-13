import config from "../../config.json";
import styled from "styled-components";

const StyledFav = styled.section`
  display: flex;
    flex-wrap: wrap;
    
    gap: 10px 26px;
    padding: 20px;
    h2 {
      font-size: 16px;
      margin-bottom: 16px;
      text-transform: capitalize;
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
    }
  `;

export default function Favorites(props){
  const favorites = props.favorites;
  
  return (
    <StyledFav>
      <h2>Aluratubes Favoritos</h2>
      
      {
        favorites.map((favorite => {
          return(
            <div>
             <img src={favorite.photo}/>
             <span>{`@${favorite.name}`}</span>
            </div>
          )
        }))
      }
     
    </StyledFav>
  )
}