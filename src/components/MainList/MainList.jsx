import { MainListItem } from "../MainListItem/MainListItem";

export const MainList = ({ data }) => {
  return data.map((d, id) =>
    id === 0 || id % 2 === 0 ? (
      <MainListItem element={d} key={id} black="true" />
    ) : (
      <MainListItem element={d} key={id} />
    )
  );
};
