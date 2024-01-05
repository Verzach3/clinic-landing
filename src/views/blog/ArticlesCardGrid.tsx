import { SimpleGrid, Container } from "@mantine/core";
import { BlogPost } from "../../types/blogPost";
import { ArticleCard } from "./ArticleCard";
import { nanoid } from "nanoid";

export function ArticlesCardsGrid({ items }: { items: BlogPost[] }) {
  const cards = items.map((article) => (
    <ArticleCard key={nanoid()} post={article} />
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
