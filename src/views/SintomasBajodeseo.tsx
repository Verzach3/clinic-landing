
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Bajodeseo.module.css";

import { ContactUs } from "../components/home/ContactUs";


function SintomasBajodeseo() {

  return (
    <div>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.016) 0%, rgba(0, 0, 0, .65) 100%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>Problemas en su bienestar sexual? </Title> 
          <Text className={classes.description} size="xl" mt="xl">
            En WellFit Clinics, combinamos la ciencia del fitness con atención personalizada para guiarte hacia tu mejor versión. Únete a nosotros y experimenta el poder de una salud óptima y personalizada.
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

      <div className={classes.banner}>

        <Title className={classes.bannerTitle}>Alivie su Bienestar sexual y disfrute de los momentos en pareja.</Title>

 
        <Text className={classes.bannerDescription}>Estás cansada de lidiar con los síntomas de una libido baja... <br></br>  
        
          Un ligero cambio hormonal puede tener un impacto importante en cómo se siente. La fatiga, los cambios de humor y las alteraciones del sueño
          ( para hombres  o  mujeres ) son sólo algunas de las formas en que un desequilibrio hormonal puede afectar profundamente la calidad de su vida.
          Si estás cansado todo el tiempo, no es simplemente algo con lo que debas “aprender a vivir”.

          Queremos ayudarte a tener más energía.

          BodyLogicMD ofrece un tratamiento personalizado para combatir la fatiga y mejorar tus niveles de energía.</Text>

        <Button className={classes.bannerButton}>Quiero mejorar mi vida</Button>

      </div>

      <div className={classes.heroContac}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(f, f, f, 9.1) 0%, rgba(f, f, f, .65) 80%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.containerContac} size="md">
          <Title className={classes.titleContac}>Nuestro equipo de profesionales Solucionara todos tus problemas </Title> <br></br>

           <Title className={classes.subtitle}>Abordar las causas fundamentales de la disfunción sexual y la baja libido. </Title>
    
          <Text className={classes.descriptionContac} size="xl" mt="xl">
            En WellFit Clinics, combinamos la ciencia del fitness con atención personalizada para guiarte hacia tu mejor versión. Únete a nosotros y experimenta el poder de una salud óptima y personalizada.
          </Text>

          <Button
            variant="gradient"
            size="lg"
            radius="xl"
            className={classes.controlContac}
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
        <ContactUs />
      </Container>


      

    </div>
  );
}


export default SintomasBajodeseo;