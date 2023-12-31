
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"
import { Overlay, Container, Title, Button, Text  } from "@mantine/core";
import classes from "./Perdidacabello.module.css";

import { ContactUs } from "../components/home/ContactUs";


function SintomasPerdidacabello() {

    return (
      <div>
        <div className={classes.hero}>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.005) 0%, rgba(0, 0, 0, .65) 100%)"
            opacity={1}
            zIndex={0}
          />
          <Container className={classes.container} size="md">
          <Title className={classes.title}>Perdida progresiva de cabello? </Title>
  <Text className={classes.description} size="xl" mt="xl">
 Puede que al ande mal en tu cuerpo ! En WellFit Clinics, combinamos la ciencia del fitness con atención personalizada para guiarte hacia tu mejor versión. Únete a nosotros y experimenta el poder de una salud óptima y personalizada.
  </Text>
  
  <Button
  variant="gradient"
  size="lg"
  radius="xl"
  className={classes.control}
  onClick={() => {
    const contactUsSection = document.getElementById('contact-us');
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Adquirir informacion
</Button>

          </Container>
        </div>
      
        <Container className={classes.contactUsContainer} id="contact-us">
  <ContactUs/>
</Container>

      </div>
    );
  }
  

export default SintomasPerdidacabello;