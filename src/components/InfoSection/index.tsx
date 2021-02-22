import React from 'react';
import { Button } from '../ButtonElement';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from './InfoElements';

const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	darkText,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
}: any) => {
	return (
		<div>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										offset={-80}
										primary={primary ? true : false}
										dark={dark ? true : false}
										dark2={dark2 ? true : false}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</div>
	);
};

export default InfoSection;
