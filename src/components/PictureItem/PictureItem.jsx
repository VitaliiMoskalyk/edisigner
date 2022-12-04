import ImageListItemBar from "@mui/material/ImageListItemBar";

export const PictureItem = ({ src, title, onClick }) => {
  return (
    <figure>
      <picture>
        <source />
        <img
          src={src}
          // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt="design project"
          loading="lazy"
          onClick={onClick}
          width="100%"
        />
      </picture>

      {title && (
        <figcaption>
          <ImageListItemBar title={title} />
        </figcaption>
      )}
    </figure>
  );
};
