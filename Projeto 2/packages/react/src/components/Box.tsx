import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: 16,
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  color: "$ignite300"
});

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}
