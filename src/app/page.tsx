import Container from "@/components/common/Container";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import Blog from "@/components/landing/Blog";
export default function Home() {
  return (
    <Container className="min-h-screen py-8">
      <Hero />
      <Projects />
      <Blog />
    </Container>
  );
}
