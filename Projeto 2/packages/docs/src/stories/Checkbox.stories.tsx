import { Box, Text, Checkbox, CheckboxProps } from "@ignite-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "$2",
          }}
        >
          {story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
