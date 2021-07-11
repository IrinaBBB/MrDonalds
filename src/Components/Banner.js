import banner from '../image/banner.png';
import styled from 'styled-components';

const BannerStyled = styled.div`
    background-image: linear-gradient(
            0deg,
            rgba(238, 238, 238, 0.2),
            rgba(1, 93, 0, 0.2)
        ),
        url(${banner});
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Banner = () => <BannerStyled />;
