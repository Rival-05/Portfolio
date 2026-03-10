import { BlogFrontmatter, BlogPost, BlogPostPreview } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'src/data/blog');

/**
 * Get all blog post files from the blog directory
 */
export function getBlogPostSlugs(): string[] {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }

    const files = fs.readdirSync(blogDirectory);
    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get blog post by slug with full content
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Validate frontmatter
        const frontmatter = data as BlogFrontmatter;
        if (!frontmatter.title || !frontmatter.description) {
            throw new Error(`Invalid frontmatter in ${slug}.mdx`);
        }

        return {
            slug,
            frontmatter,
            content,
        };
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}

/**
 * Get all blog posts with frontmatter only (for listing page)
 */
export function getAllBlogPosts(): BlogPostPreview[] {
    const slugs = getBlogPostSlugs();

    const posts = slugs
        .map((slug) => {
            const post = getBlogPostBySlug(slug);
            if (!post) return null;

            return {
                slug: post.slug,
                frontmatter: post.frontmatter,
            };
        })
        .filter((post): post is BlogPostPreview => post !== null)
        .sort((a, b) => {
            // Sort by date, newest first
            return (
                new Date(b.frontmatter.date).getTime() -
                new Date(a.frontmatter.date).getTime()
            );
        });

    return posts;
}

/**
 * Get all published blog posts
 */
export function getPublishedBlogPosts(): BlogPostPreview[] {
    const allPosts = getAllBlogPosts();
    return allPosts.filter((post) => post.frontmatter.isPublished);
}
