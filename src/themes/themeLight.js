import { rgba } from "polished";

import theme from "./index";

const colorLabel = rgba("black", 0.57);
const colorText = rgba("black", 0.96);

export const lightTheme = {
  ...theme,
  background: "rgb(240, 240, 249)",
  primaryColor: "#202E3A",

  overlay: "rgba(110, 118, 125, 0.4)",
  headerColor: "rgb(227, 227, 232)",

  colorText: colorText,
  colorLabel: colorLabel,

  font: "Poppins",
};
