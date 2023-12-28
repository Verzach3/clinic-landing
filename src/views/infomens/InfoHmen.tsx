
import { Container, Title, Accordion, Paper, AccordionItem } from '@mantine/core';
import styles from '../views/infomens/info.module.css';

function InfoHmen() {
  return (
    <Container size="md" className={styles.container}>
    <Title order={1} className={styles.title}>Terapia Hormonal Bioidéntica para Hombres</Title>
    
    <Paper className={styles.paper}>
      {/* Contenido del Paper */}
    </Paper>

    <Accordion>
      <AccordionItem value="section1" title="¿Qué es la terapia hormonal bioidéntica?">
        {/* Contenido del AccordionItem */}
      </AccordionItem>

      <AccordionItem value="section2" title="Beneficios de la terapia hormonal bioidéntica para hombres">
        {/* Contenido del AccordionItem */}
      </AccordionItem>
      {/* Agregar más AccordionItems según sea necesario */}
    </Accordion>
  </Container>
  );
}

export default InfoHmen;