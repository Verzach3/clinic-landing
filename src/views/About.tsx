import { Overlay, ThemeIcon, Text, Title, Container, SimpleGrid, rem} from "@mantine/core";
import classes from "./About.module.css";

import { IconGauge,IconServer, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';


// Datos de los valores corporativos (ejemplo)
const CORE_VALUES = [
  { title: 'Rigor Científico', description: 'Compromiso con prácticas basadas en evidencia y investigación continua para asegurar que todos los programas de salud y fitness estén fundamentados en los últimos hallazgos científicos' },
  { title: 'Atención Personalizada', description: 'Enfatizar la importancia de adaptar los planes de salud y fitness a las necesidades individuales, reconociendo que el camino de cada cliente hacia una salud óptima es único.' },
  { title: 'Integridad' , description:'Mantener los más altos estándares de honestidad y práctica ética en cada aspecto del negocio, incluyendo la comunicación transparente con los clientes y honestidad en marketing y promociones.'},
  { title: 'Innovación' , description:'Búsqueda y adopción continua de nuevos métodos, tecnologías e ideas para mejorar los resultados de salud y fitness de los clientes.'},
  { title: 'Respeto a las Normas Legales y Éticas' , description:'Adherencia estricta a las leyes colombianas y a los estándares éticos internacionales en el cuidado del paciente.' },
  { title: 'Comunidad y Colaboración:' , description:'Construir un sentido de comunidad entre clientes y personal, y colaborar con otros profesionales de la salud para proporcionar atención integral.'},
  { title: 'Sostenibilidad' , description: 'Compromiso con la sostenibilidad ambiental en las operaciones de la clínica y promover prácticas saludables para los individuos y sostenibles para el planeta.'},
  { title: 'Empoderamiento y Educación', description:'Enfocarse en empoderar a los clientes a través de la educación sobre su salud y bienestar, proporcionando el conocimiento y las herramientas necesarias para tomar decisiones informadas sobre su salud.'}
];


export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Enfoque Holístico',
    description:
      'Abordamos las causas fundamentales de los problemas de salud en lugar de simplemente tratar los síntomas, considerando todos los aspectos de tu bienestar, incluyendo la salud física, mental y emocional',
  },
  {
    icon: IconUser,
    title: 'Planes Personalizados',
    description:
      'Tu viaje hacia la salud es único, y nuestras soluciones también lo son. Diseñamos planes de salud personalizados que se alinean con tus objetivos, garantizando resultados sostenibles.',
  },
  {
    icon: IconServer,
    title: 'Equipo de Acompañamiento',
    description:
      'Nuestro equipo compasivo y experto está aquí para guiarte en cada paso del camino, brindando asesoramiento experto y apoyo inquebrantable. ahora uno mejor para este',

  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}



function About() {


  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);
  const coreValuesElements = CORE_VALUES.map((value, index) => (
    <div key={index} className={classes.coreValue}>
      <Title order={4} className={classes.coreValueTitle}>{value.title}</Title>
      <Text className={classes.coreValueDescription}>{value.description}</Text>
    </div>
  ));


  return (

    <div>

    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>WellFit Clinic</Title>

        <Title className={classes.title}>Mision:</Title>
        <Text className={`${classes.description} justifiedText`} size="xl" mt="xl">
          En WellFit Clinics, nuestro compromiso es la excelencia en la promoción de la salud y el bienestar personal.<br /><br />

          Ofrecemos soluciones integrales para el fitness y la salud, desde entrenamientos de alta energía y asesoramiento nutricional hasta estrategias de manejo del estrés y prevención de enfermedades. Con integridad y rigor científico, empoderamos a nuestros clientes para tomar decisiones informadas y alcanzar sus metas de salud a largo plazo.
        </Text>


      </Container>

    </div>

<Container className={classes.wrapper}>


      <Title className={classes.title2}>Lo que nos distingue</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>


    <div>
      {/* Sección Hero y Misión existentes */}
      {/* ... */}

      {/* Sección Lo que nos distingue */}
      {/* ... */}

      {/* Sección de Valores Corporativos */}
      <Container className={classes.coreValuesSection}>
        <Title className={classes.sectionTitle}>Nuestros Valores Corporativos</Title>
        <SimpleGrid cols={2} spacing="lg">
          {coreValuesElements}
        </SimpleGrid>
      </Container>
    </div>
    


    </div>





  );
}

export default About;
