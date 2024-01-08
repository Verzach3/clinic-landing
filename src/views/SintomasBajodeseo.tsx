
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Bajodeseo.module.css";



import { ContactUs } from "../components/home/ContactUs";

import { HowWorks } from "../components/Sintomas/HowWorks";

import { ClientsComments } from "../components/Sintomas/ClientsComments";

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


        <Button
          variant="gradient"
          size="lg"
          radius="xl"
          className={classes.bannerButton}
          onClick={() => {
            const contactUsSection = document.getElementById('contact-us');
            if (contactUsSection) {
              contactUsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Quiero Mejorar mi
        </Button>


      </div>

      <div className={classes.heroContac}>

      
        <div>
          <div className={classes.containerContac} >
            <Title className={classes.titleContac}>Nuestro equipo de profesionales Solucionara todos tus problemas </Title> <br></br>

            <Title className={classes.subtitle}>Abordar las causas fundamentales de la disfunción sexual y la baja libido. </Title>
            <Title className={classes.text}>¿TENGO DISFUNCIÓN ERÉCTIL? </Title>


            <Text className={classes.descriptionContac} size="md" mt="xl">
              Existe un tratamiento para mejorar el flujo sanguíneo y la respuesta muscular para abordar la disfunción eréctil,
              mejorar la experiencia sexual y mejorar el bajo deseo sexual.
            </Text>
            <Title className={classes.text}>¿ES MI NUTRICIÓN? </Title>
            <Text className={classes.descriptionContac} size="md" mt="xl">
              Existen técnicas para ayudar a identificar deficiencias nutricionales durante los cambios hormonales y el proceso natural de envejecimiento.
            </Text>

            <Title className={classes.text}>¿QUÉ PUEDO HACER CON MI LIBIDO? </Title>

            <Text className={classes.descriptionContac} size="md" mt="xl">
              Existe un tratamiento para mejorar el flujo sanguíneo, aumentar el deseo, mejorar la satisfacción y aliviar la sequedad vaginal.
            </Text>


            <Title className={classes.text}>¿QUÉ PASA CON MIS HORMONAS DE CRECIMIENTO? </Title>

            <Text className={classes.descriptionContac} size="md" mt="xl">
              Existe un tratamiento para aumentar la producción natural de hormonas de crecimiento de su cuerpo para que se sienta como una versión más joven de usted mismo.

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


          </div>
          <div ></div>
        </div>
      </div>

      <Container className={classes.HowWorks} id="HowWorks">
        <HowWorks />
      </Container>


      <div style={{ width: '100%', backgroundColor:"#0c1f47 "}}>
        <ClientsComments />
      </div>



      <Container className={classes.contactUsContainer} id="contact-us">
        <ContactUs />
      </Container>

     



    </div>
  );
}


export default SintomasBajodeseo;