import { Center, Container } from "@mantine/core";
import {
  createDirectus,
  DirectusClient,
  rest,
  RestClient,
  readItems,
} from "@directus/sdk";
import { useEffect, useState } from "react";
import { BlogCarousel } from "./blog/BlogCarousel";
import { ArticlesCardsGrid } from "./blog/ArticlesCardGrid";
import { BlogPost } from "../types/blogPost";

function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | undefined>();
  const [directus, setDirectus] = useState<
    (DirectusClient<any> & RestClient<any>) | undefined
  >(undefined);

  useEffect(() => {
    setDirectus(
      createDirectus("https://directus.caprover.thepanas.me/").with(rest())
    );
  }, []);
  async function getPosts() {
    const result = await directus?.request(
      // TODO change this any to a type
      readItems("posts" as any, {
        fields: ["title", "recent", "tags", "image", "date_updated"],
      })
    );
    console.log(result);
    setBlogPosts(result as BlogPost[]);
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
      {blogPosts ? (
        <>
          <div style={{ marginBottom: "2rem" }}>
            <BlogCarousel
              items={blogPosts.filter((blogpost) => blogpost.recent)}
            />
          </div>
          <ArticlesCardsGrid items={blogPosts} />
        </>
      ) : (
        <h3>No hay post publicados</h3>
      )}
    </Container>
  );
}

export default Blog;
