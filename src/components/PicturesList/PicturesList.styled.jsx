import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  margin-top: 60px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1140px) {
    margin-top: 80px;
  }
`;

export const ImageTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  font-weight: 600;
  font-size: 24px;
`;
