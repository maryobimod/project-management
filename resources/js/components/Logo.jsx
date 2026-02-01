import { Center, Group, Text, rem, useComputedColorScheme } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";

export default function Logo(props) {
  const computedColorScheme = useComputedColorScheme();

  return (
    <Group wrap="nowrap" {...props}>
      <Center
        bg={computedColorScheme === "dark" ? "blue.8" : "blue.9"}
        p={6}
        style={{ borderRadius: "100%" }}
      >
        <IconCode
          style={{
            stroke: "#fff",
            width: rem(24),
            height: rem(24),
            flexShrink: 0,
          }}
        />
      </Center>

      <Text fz={20} fw={600}>
        Group 2 Software Engineering
      </Text>
    </Group>
  );
}
