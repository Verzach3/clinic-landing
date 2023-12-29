import { Container, Image, Stack, Text, Title } from "@mantine/core";

function BlogView() {
  return (
    <Container>
      <Stack>
        <Title ta={"center"} mt={"xl"}>Titulo del Blog</Title>
        <Text size="xs" ta={"center"} c={"gray"}>
          Nombre del Autor | Fecha de creacion: 12/12/2021
        </Text>

        <Text size="xl" ta={"center"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
          repellendus corrupti. Sed magni provident voluptates vitae enim odio
          laudantium suscipit? Pariatur nihil distinctio debitis iusto similique
          ex consequatur, cum ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, voluptatem reiciendis iure quod sint
          perferendis voluptas tenetur ea maxime repellat nobis molestias, modi
          eligendi mollitia dolor beatae expedita dolorum deleniti. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Labore neque molestiae
          dolore corrupti soluta consequatur. Adipisci dolore praesentium quidem
          iusto amet a ratione eius ipsam in, quis tempore molestias
          voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Est ratione, veniam quaerat quasi numquam laborum officia
          repudiandae molestias. Repellat in, tempora veniam earum nemo ad autem
          nostrum vel sunt adipisci!
        </Text>
        <Image src={"https://images.unsplash.com/photo-1682685797277-f2bf89b24017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <Text size="xl" ta={"center"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
          repellendus corrupti. Sed magni provident voluptates vitae enim odio
          laudantium suscipit? Pariatur nihil distinctio debitis iusto similique
          ex consequatur, cum ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, voluptatem reiciendis iure quod sint
          perferendis voluptas tenetur ea maxime repellat nobis molestias, modi
          eligendi mollitia dolor beatae expedita dolorum deleniti. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Labore neque molestiae
          dolore corrupti soluta consequatur. Adipisci dolore praesentium quidem
          iusto amet a ratione eius ipsam in, quis tempore molestias
          voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Est ratione, veniam quaerat quasi numquam laborum officia
          repudiandae molestias. Repellat in, tempora veniam earum nemo ad autem
          nostrum vel sunt adipisci!
        </Text>
        <Text size="xl" ta={"center"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
          repellendus corrupti. Sed magni provident voluptates vitae enim odio
          laudantium suscipit? Pariatur nihil distinctio debitis iusto similique
          ex consequatur, cum ab. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos, voluptatem reiciendis iure quod sint
          perferendis voluptas tenetur ea maxime repellat nobis molestias, modi
          eligendi mollitia dolor beatae expedita dolorum deleniti. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Labore neque molestiae
          dolore corrupti soluta consequatur. Adipisci dolore praesentium quidem
          iusto amet a ratione eius ipsam in, quis tempore molestias
          voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Est ratione, veniam quaerat quasi numquam laborum officia
          repudiandae molestias
        </Text>
      </Stack>
    </Container>
  );
}

export default BlogView;
