import ImageListItemBar from "@mui/material/ImageListItemBar";

export const PictureItem = ({ src, title, onClick }) => {
  return (
    <>
      <img
        src={src}
        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt="design project"
        loading="lazy"
        onClick={onClick}
        width="100%"
      />
      {title && <ImageListItemBar title={title} />}
    </>
  );
};
