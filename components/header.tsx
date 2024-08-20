import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Drawer,
  Box,
  Button,
  Center,
  Collapse,
  Divider,
  rem,
  ScrollArea,
  UnstyledButton,
  useMantineTheme,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./header.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const links = [
  { link: "#home", label: "Home" },
  { link: "#about", label: "About" },
  { link: "#experience", label: "Experience" },
  { link: "#contact", label: "Contact" },
];

export function HeaderSimple() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner} id="home">
        {/* <MantineLogo size={28} /> */}
        <Avatar radius="xl" color="indigo">
          YK
        </Avatar>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="xs"
          size="sm"
        />
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Yudha Kurniawan"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            {links.map((item, index) => (
              <a
                href={item.link}
                className={classes.link}
                key={index}
                onClick={toggleDrawer}
              >
                {item.label}
              </a>
            ))}
          </ScrollArea>
        </Drawer>
      </Container>
    </header>
  );
}
