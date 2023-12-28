import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Home.module.css";
import { FeaturesTitle } from "../components/home/Features";
import { ContactUs } from "../components/home/ContactUs";

function Home() {
  return (
    <div>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
        <Title className={classes.title}>Descubre tu potencial con WellFit Clinics</Title>
<Text className={classes.description} size="xl" mt="xl">
  Revoluciona tu enfoque hacia la salud y el bienestar con nuestros programas de bienestar hechos a medida. En WellFit Clinics, combinamos la ciencia del fitness con atención personalizada para guiarte hacia tu mejor versión. Únete a nosotros y experimenta el poder de una salud óptima y personalizada.
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
        <Container>
          <FeaturesTitle />
        </Container>
        <Container>
          <ContactUs/>
        </Container>
    
    </div>
  );
}

export default Home;
