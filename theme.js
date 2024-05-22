import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { cardTheme } from "./src/cardTheme";
import { menuTheme } from "./src/menuTheme";
import { modalTheme } from "./src/modalTheme";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("white", "#070418")(props),
        bgGradient: mode("linear(to-b, blue.400, white)", "linear(to-t, #070418, black)")(props),
        backgroundRepeat: "no-repeat"
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
  components: {
    Card: cardTheme,
    Menu: menuTheme,
    Modal: modalTheme,
  },
});

export default theme;
