import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "@/public/programming_image.svg";
import classes from "./hero.module.css";

export function HeroBullets() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <Text fz={32} fw={800}>
              hello world! it's me
            </Text>
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "blue", to: "purple" }}
            >
              Yudha Kurniawan
            </Text>
            <br />
            <span>
              <Text fz={32} fw={800}>
                Sr. Fullstack Developer
              </Text>
            </span>
          </Title>
          <Text c="dimmed" mt="md">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product.
          </Text>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "purple" }}
              component="a"
              href="#contact"
            >
              Get contact
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Download CV
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
