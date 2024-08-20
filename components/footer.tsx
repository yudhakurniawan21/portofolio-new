import {
  Image,
  Container,
  Group,
  ActionIcon,
  rem,
  Avatar,
  Affix,
  Button,
  Transition,
  Text,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconArrowUp,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import imageNext from "@/public/next.svg";
import classes from "./footer.module.css";
import { useWindowScroll } from "@mantine/hooks";

export function FooterSocial() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        {/* <Image src={imageNext.src} width={20} height={20} /> */}
        <Avatar radius="xl" />
        <Text>{new Date().getFullYear()}</Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/yudha-kurniawan-b5aaa0149"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://github.com/yudhakurniawan21"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/yudhakurniawan21"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "purple" }}
              leftSection={
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
}
