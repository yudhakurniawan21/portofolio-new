import { Badge, Container, Grid, Group, Title, Text, rem } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTabler,
  IconBrandTypescript,
  IconBrandVue,
  IconCoffee,
  IconHtml,
  IconPower,
} from "@tabler/icons-react";
import React from "react";

const AboutPage = () => {
  return (
    <Container size="lg" py="xl" my={rem(120)} id="about">
      <Group justify="center" my={50}>
        <Badge
          variant="gradient"
          gradient={{ from: "blue", to: "purple" }}
          size="lg"
        >
          About me
        </Badge>
      </Group>
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 100 }} grow>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} mb={50}>
          <Title>Get to know me!</Title>
          <Text c="dimmed" mt="md" ta="justify">
            I'm a Fullstack Web Developer with a focus on building and managing
            both the frontend and backend of websites and web applications,
            contributing to the overall success of the product. With nearly 6
            years of experience, I have honed my skills in creating seamless,
            user-friendly interfaces and robust, scalable backend systems. I am
            passionate about sharing my knowledge and experiences in web
            development with the broader Dev Community. Feel free to connect or
            follow me on LinkedIn and Instagram. I'm open to job opportunities
            where I can contribute my skills, continue learning, and grow
            professionally. If you have a great opportunity that aligns with my
            experience and expertise, please don't hesitate to contact me. Let's
            build something amazing together!
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <Title>Skills</Title>
          <Group mt="md">
            <Badge
              size="lg"
              color="yellow"
              leftSection={<IconBrandJavascript />}
            >
              Javascript
            </Badge>
            <Badge size="lg" color="dark" leftSection={<IconBrandNextjs />}>
              Next JS
            </Badge>
            <Badge size="lg" color="blue" leftSection={<IconBrandReact />}>
              React JS
            </Badge>
            <Badge size="lg" color="green" leftSection={<IconBrandVue />}>
              Vue JS
            </Badge>
            <Badge size="lg" leftSection={<IconBrandTypescript />}>
              Typescript
            </Badge>
            <Badge size="lg" color="lime" leftSection={<IconBrandNodejs />}>
              Node JS
            </Badge>
            <Badge size="lg" leftSection={<IconBrandPhp />}>
              PHP
            </Badge>
            <Badge size="lg" color="grey" leftSection={<IconCoffee />}>
              Java
            </Badge>
            <Badge size="lg" color="lime" leftSection={<IconPower />}>
              Springboot
            </Badge>
            <Badge size="lg" color="orange" leftSection={<IconBrandHtml5 />}>
              HTML
            </Badge>
            <Badge size="lg" leftSection={<IconBrandCss3 />}>
              CSS
            </Badge>
            <Badge size="lg" color="dark" leftSection={<IconBrandTabler />}>
              Terminal
            </Badge>
            <Badge size="lg" leftSection={<IconBrandMysql />}>
              MySql
            </Badge>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutPage;
