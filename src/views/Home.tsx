import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Titulo Grande</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          fugiat, maiores, possimus accusamus ullam suscipit earum eius facilis
          qui enim accusantium omnis. Laudantium, corporis beatae earum deserunt
          ipsa magni exercitationem.
        </Text>

        <Button
          variant="gradient"
          size="lg"
          radius="xl"
          className={classes.control}
        >
          Contactanos
        </Button>
      </Container>
    </div>
  );
}

export default Home;
