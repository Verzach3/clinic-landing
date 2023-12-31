import { Overlay, ThemeIcon, Text, Title, Container, SimpleGrid, rem} from "@mantine/core";
import classes from "./About.module.css";
import { GrUserAdd,GrWorkshop,GrAchievement   } from "react-icons/gr";
import { GrSystem } from "react-icons/gr";
import {IconGitPullRequest,IconSocial } from '@tabler/icons-react';


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
    icon: IconGitPullRequest,
    title: 'Innovación Constante',
    description:
      'Nos mantenemos a la vanguardia de la medicina moderna, incorporando constantemente las últimas investigaciones y tecnologías en nuestros métodos de tratamiento. Esto asegura que siempre estés recibiendo la atención más avanzada y eficaz disponible.',
  },
  {
    icon: GrAchievement ,
    title: 'Educación y Empoderamiento',
    description:
      'Creemos firmemente en educar a nuestros pacientes sobre su salud. Te proporcionamos las herramientas y el conocimiento necesarios para tomar decisiones informadas, empoderándote para que seas un participante activo en tu viaje hacia el bienestar.',
  },
  {
    icon: GrUserAdd ,
    title: 'Atención Integrativa',
    description:
      ' Integramos diversas modalidades de salud y bienestar para proporcionar una atención verdaderamente holística. Esto incluye terapias tradicionales y alternativas para asegurar un enfoque integral en tu cuidado de la salud.',

  },
  {
    icon: GrWorkshop ,
    title: 'Compromiso con la Excelencia',
    description:
      'Nuestro compromiso es ofrecer el más alto nivel de cuidado a nuestros pacientes. Cada aspecto de nuestro servicio está diseñado para garantizar la excelencia, desde la atención clínica hasta la experiencia del paciente, asegurando que cada visita sea excepcional.',
  },
  {
    icon: GrSystem ,
    title: 'Acceso Digital',
    description:
      'Ofrecemos soluciones digitales para la salud, facilitando el acceso a nuestros servicios desde cualquier lugar. Esto incluye consultas en línea, monitoreo de salud a distancia, y una plataforma digital para una comunicación eficiente, asegurando que siempre estés conectado con tu cuidado.',
  },

  {
    icon: IconSocial,
    title: 'Responsabilidad Social',
    description:
      'Estamos comprometidos con el bienestar de la comunidad. Participamos activamente en iniciativas de salud pública y educación sanitaria, contribuyendo a una sociedad más sana y consciente de la importancia del cuidado integral de la salud.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <ThemeIcon variant="light" size={80} radius={50} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ width: rem(40), height: rem(40) }}  />
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
    
      {/* Sección de Valores Corporativos */}
      <Container className={classes.coreValuesSection}>
        <Title className={classes.sectionTitle}>Nuestros Valores Corporativos</Title>
        <SimpleGrid cols={3} spacing="lg">
          {coreValuesElements}
        </SimpleGrid>
      </Container>
    </div>
    


    </div>





  );
}

export default About;
