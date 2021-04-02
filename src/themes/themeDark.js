import { rgba } from "polished";

import theme from "./index";

const colorLabel = rgba("white", 0.57);
const colorText = rgba("white", 0.96);

export const darkTheme = {
  ...theme,
  background: "rgb(36, 36, 36)",
  primaryColor: "#17141A",

  headerColor: "#25282c",
  overlay: "rgba(147, 149, 150, 0.4)",

  colorText: colorText,
  colorLabel: colorLabel,

  font: "Poppins",
};
