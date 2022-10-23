// import { PictureItem } from "../PictureItem/PictureItem";
import { Wrapper } from "./PicturesList.styled";
import ImageList from "@mui/material/ImageList";
import { useWindowWidth } from "@react-hook/window-size";
import { PictureItem } from "../PictureItem/PictureItem";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from "react-router";

export const PicturesList = ({ data, title, variant, f }) => {
  const screenWidth = useWindowWidth();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ImageList
        cols={
          screenWidth >= 1440
            ? 4
            : screenWidth >= 768
            ? 3
            : screenWidth >= 400
            ? 2
            : 1
        }
        variant={variant}
        gap={20}
      >
        {data.map((item, id) => (
          <ImageListItem style={{ height: "fit-content" }} key={id}>
            <PictureItem
              src={title ? item.collection[0] : item}
              title={title ? item.title : null}
              onClick={
                title &&
                (() => {
                  navigate(item.title);
                  f(item.collection);
                })
              }
            />
            {/* (() => f(item.collection)) */}
          </ImageListItem>
        ))}
      </ImageList>
    </Wrapper>
  );
};
