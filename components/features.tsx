import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Timeline,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";
import classes from "./features.module.css";

const mockdata = [
  {
    position: "Sr. Fullstack Developer",
    place: "PT. ASLI RI",
    duration: "Nov 2021 - Present",
  },
  {
    position: "Digital Engineer Specialist (Fullstack Developer)",
    place: "PT. ADIRA FINANCE",
    duration: "Jan 2021 - Oct 2021",
  },
  {
    position: "Fullstack Developer",
    place: "Nityo Infotech",
    duration: "Feb 2020 - Dec 2020",
  },
  {
    position: "Web Designer",
    place: "PT. SUPRANUSA SINDATA",
    duration: "Apr 2019 - Oct 2019",
  },
  {
    position: "Corporate Webmaster",
    place: "PT. Intiwhiz International",
    duration: "Sep 2018 - Apr 2019",
  },
];

export function FeaturesCards() {
  return (
    <Container size="lg" py="xl" my={rem(120)} id="experience">
      <Group justify="center" my={50}>
        <Badge
          variant="gradient"
          gradient={{ from: "blue", to: "purple" }}
          size="lg"
        >
          My Experience
        </Badge>
      </Group>

      <Timeline
        active={mockdata.length}
        bulletSize={24}
        lineWidth={2}
        color="indigo"
      >
        {mockdata.map((item, index) => (
          <Timeline.Item
            key={index}
            bullet={<IconUser size={12} />}
            title={item.position}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                {item.place}
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              {item.duration}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}
