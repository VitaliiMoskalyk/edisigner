const TitleSlicer = (title, screenWidth) => {
  const expression = title
    .trim()
    .split(" ")
    .map((e) => e[0]);

  return screenWidth >= 768 ? title.split(" ").join("") : expression.join("");
};

module.exports = TitleSlicer;
