
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconStatusChange,
  IconThermometer,
  IconCircuitSwitchClosed,
  IconHazeMoon,
  IconArrowDownBar,
  IconMoodSick,
  IconChevronDown,

} from '@tabler/icons-react';

import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconThermometer,
    title: 'Dolor de cabeza',
    description: 'Sensación dolorosa en cualquier parte de la cabeza, variando en intensidad.'
  },
  {
    icon: IconMoodSick,
    title: 'Fatiga',
    description: ' Cansancio extremo y falta de energía persistente',
  },
  {
    icon: IconCircuitSwitchClosed,
    title: 'Perdida de cabello',
    description: 'Reducción notable de cabello en el cuero cabelludo.',
  },
  {
    icon: IconArrowDownBar,
    title: 'Bajo deseo sexual',
    description: 'Disminución del interés en la actividad sexual.',
  },
  {
    icon: IconHazeMoon,
    title: 'Sofocos / Sudores nocturnos',
    description: 'Calor repentino y transpiración excesiva durante la noche',
  },
  {
    icon: IconStatusChange,
    title: 'Cambios de Humos /Ansiedad  / Depresion',
    description: 'Alteraciones del estado de ánimo, inquietud y tristeza profunda.',
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />
          <Group h="101%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Sintomas
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Sintomas</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Realiza el examen
                      </Text>
                      <Text size="xs" c="dimmed">
                        Realiza nuestro test para conocer como puedes mejorar tu vida
                      </Text>
                    </div>
                    <Button variant="default">Empecemos</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="/blog" className={classes.link}>
              Noticias
            </a>
            <a href="/about" className={classes.link}>
              Nosotros
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Sintomas
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Noticias
          </a>
          <a href="#" className={classes.link}>
            Nosotros
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Header