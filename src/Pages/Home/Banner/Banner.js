import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
    margin-top: 15px; 
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const Arrow = styled.div`
    background-color: white;
    margin: auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: ${(props) => props.direction === "left" && "10px"};;
    right: ${(props) => props.direction === "right" && "10px"};;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0.8;
    z-index: 3;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const Slider = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #${(props) => props.bg};
`;

const ImageContent = styled.div`
    height: 99%;
`;

const Image = styled.img`
    height: 56%;
`;

const bannerItems = [
    {
        id: 1,
        img: "https://glamours-world.netlify.app/banner-1.jpg"
    },
    {
        id: 2,
        img: "https://glamours-world.netlify.app/banner-2.jpg"
    },
    {
        id: 3,
        img: "https://glamours-world.netlify.app/banner-3.jpg"
    },
    {
        id: 4,
        img: "https://glamours-world.netlify.app/banner-4.jpg"
    }
]

const Banner = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const clickHandle = (direction) => {
        if (direction === 'left') {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        }
        else if (direction === 'left') {
            setSliderIndex(sliderIndex > 1 ? sliderIndex - 2 : 3);
        }
        else {
            setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => clickHandle("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {bannerItems.map(bannerItem => (
                    <Slider bg={bannerItem?.bg}>
                        <ImageContent>
                            <Image src={bannerItem?.img} />
                        </ImageContent>
                    </Slider>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => clickHandle("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Banner;