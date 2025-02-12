import "styled-components";
import { defaultThemes } from "../themes/default";

type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
