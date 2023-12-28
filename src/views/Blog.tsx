import { Container } from "@mantine/core";
import {
  createDirectus,
  DirectusClient,
  rest,
  RestClient,
  readItems,
} from "@directus/sdk";
import { useEffect, useState } from "react";
function Blog() {
  const [directus, setDirectus] = useState<
    (DirectusClient<any> & RestClient<any>) | undefined
  >(undefined);

  useEffect(() => {
    setDirectus(
      createDirectus("http://directus.caprover.thepanas.me/").with(rest())
    );
  }, []);

  async function getPosts() {
    const result = await directus?.request(readItems("posts"));
    console.log(result);
  }

  useEffect(() => {
    if (directus) {
      getPosts();
    }
  }, [directus]);

  return (
    <Container>
      <h1>Blog</h1>
    </Container>
  );
}

export default Blog;
