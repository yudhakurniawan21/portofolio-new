import {
  Image,
  Container,
  Group,
  ActionIcon,
  rem,
  Avatar,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import imageNext from "@/public/next.svg";
import classes from "./footer.module.css";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        {/* <Image src={imageNext.src} width={20} height={20} /> */}
        <Avatar radius="xl" />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
