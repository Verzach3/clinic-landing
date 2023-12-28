import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Home.module.css";

function About() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>WellFit Clinic</Title>
        <Text className={`${classes.description} justifiedText`} size="xl" mt="xl">
  En WellFit Clinics, nuestro compromiso es la excelencia en la promoción de la salud y el bienestar personal.<br /><br />

  Ofrecemos soluciones integrales para el fitness y la salud, desde entrenamientos de alta energía y asesoramiento nutricional hasta estrategias de manejo del estrés y prevención de enfermedades. Con integridad y rigor científico, empoderamos a nuestros clientes para tomar decisiones informadas y alcanzar sus metas de salud a largo plazo.
</Text>
      </Container>
    </div>
  );
}

export default About;
