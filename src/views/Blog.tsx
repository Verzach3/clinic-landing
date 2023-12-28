import { Center, Container, Stack } from "@mantine/core";
import {
  createDirectus,
  DirectusClient,
  rest,
  RestClient,
  readItems,
} from "@directus/sdk";
import { useEffect, useState } from "react";
import { BlogListItem } from "./blog/BlogListItem";
import { BlogCarousel } from "./blog/BlogCarousel";

function Blog() {
  const [directus, setDirectus] = useState<
    (DirectusClient<any> & RestClient<any>) | undefined
  >(undefined);

  useEffect(() => {
    setDirectus(
      createDirectus("https://directus.caprover.thepanas.me/").with(rest())
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
      <Center>
        <h1>Ultimos Posts</h1>
      </Center>
      <div style={{ marginBottom: "2rem"}}>
        <BlogCarousel />
      </div>
      <Stack>
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
      </Stack>
    </Container>
  );
}

export default Blog;
