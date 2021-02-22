import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted>
					<source type="video/mp4" src={Video} />
				</VideoBg>
			</HeroBg>
			<HeroContent>
				<HeroH1>PiperNet Decentralized internet</HeroH1>
				<HeroP>
					Sign up for a new account today and receive free Piper Picer Coin
					credit.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary
						dark
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
						activeClass="active"
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
