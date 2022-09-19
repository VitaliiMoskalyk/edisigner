import { Section, Box } from "./Container.styled";

export const Container = ({ children }) => {
  return (
    <Section>
      <Box>{children}</Box>
    </Section>
  );
};
