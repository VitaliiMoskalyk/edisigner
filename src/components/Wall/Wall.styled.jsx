import styled from "@emotion/styled";
import wall_mobile from "./wallpaper_mobile.jpg";
import wall_tablet from "./wallpaper_tablet.jpg";
import wall_desktop from "./wallpaper_desktop.jpg";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${window.screen.availHeight}px;
  background: #e1d9d6 url(${wall_mobile}) right/cover;

  @media (min-width: 768px) {
    background: #e1d9d6 url(${wall_tablet}) center/cover;
  }

  @media (min-width: 1440px) {
    background: #e1d9d6 url(${wall_desktop}) center/cover;
  }
`;

export const MenuBlock = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 20px;
  margin-top: 70px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
