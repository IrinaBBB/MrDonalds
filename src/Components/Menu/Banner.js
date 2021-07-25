import styled from 'styled-components';
import banner from '../../image/banner.png';

export const Banner = styled.div`
    background-image: linear-gradient(
            0deg,
            rgba(238, 238, 238, 0.2),
            rgba(1, 93, 0, 0.2)
        ),
        url(${banner});
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
`;
