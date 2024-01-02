import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
import { BlogPost } from '../../types/blogPost';


export function ArticlesCardsGrid({ items }: { items: BlogPost[] }) {
    const cards = items.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image fit='fill' src={`https://directus.caprover.thepanas.me/assets/${article.image}`} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {(new Date(article.date_updated ?? article.date_created)).getDate()}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
        </Container>
    );
}