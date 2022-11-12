import styled from "styled-components";
import BannerImg from "../assets/img/banner.jpg"
import Image from "next/image";

const StyledBanner = styled.div`
	/* background-image: url(${({backgroundImage}) => backgroundImage}); */
	.banner {
		width: 100%;
    object-fit: cover;
    height: 290px;
	}
`

export default function Banner() {
  return (
    <StyledBanner>
			<div>
			<Image className="banner" src={BannerImg} alt="banner" quality={100} priority={true}/>
			</div>
		</StyledBanner>
  );
}

