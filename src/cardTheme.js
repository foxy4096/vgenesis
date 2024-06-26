import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    border: "1px solid #DCDCDC",
    _dark: {
      background: "#071220",
      border: "1px solid #232323",
    },
  },
  header: {
    marginBottom: "2px",
  },
  body: {
    paddingTop: "2px",
  },
  footer: {
    paddingTop: "2px",
  },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });