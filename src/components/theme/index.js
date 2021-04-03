import { useTheme } from "../../contexts/themes";
// Styles styled-components
import { ButtonXSStyled } from "../../styles/ButtonXSStyled";

export default function ThemeSelector() {
  const { toggleTheme, currentTheme } = useTheme();

  const handelOnClickChangeTheme = (event) => {
    return toggleTheme(event.target.id);
  };

  return (
    <ButtonXSStyled
      type="button"
      id={currentTheme === "dark" ? "light" : "dark"}
      onClick={handelOnClickChangeTheme}
    >
      {currentTheme === "dark" ? "☀️" : "🌙"}
    </ButtonXSStyled>
  );
}
