import { Image } from "antd";
import { useState } from "react";
import "../../index.css";
import { Photo, PhotoWrapper, MainImgWrapper } from "./ProjectItem.styled";

export const PictureItem = ({ data }) => {
  const [visible, setVisible] = useState(false);

  return (
    <PhotoWrapper>
      <MainImgWrapper>
        <Photo
          preview={{
            visible: false,
          }}
          src={data.photo}
          onClick={() => setVisible(true)}
          loading="lazy"
        />
        <p>{data.title}</p>
      </MainImgWrapper>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,

            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {data.collection.map((i, id) => (
            <Photo src={i} key={id} />
          ))}
        </Image.PreviewGroup>
      </div>
    </PhotoWrapper>
  );
};
