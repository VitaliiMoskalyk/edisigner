import { ProjectItem } from "../ProjectItem/ProjectItem";

export const MainList = ({ data, position }) => {
  switch (position) {
    case "left": {
      return data.map((d, id) => <ProjectItem data={d} key={id} left="true" />);
    }

    case "right": {
      return data.map((d, id) => (
        <ProjectItem data={d} key={id} right="true" />
      ));
    }

    case "chess": {
      return data.map((d, id) =>
        id === 0 || id % 2 === 0 ? (
          <ProjectItem data={d} key={id} left="true" />
        ) : (
          <ProjectItem data={d} key={id} right="true" />
        )
      );
    }

    default:
      break;
  }
};
