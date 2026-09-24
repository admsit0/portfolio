# Blog Publishing Guide

This guide explains how to generate and publish new blog posts on your portfolio website.

## 1. Current State
The blog is currently a React component (`src/pages/Blog.tsx`) with a placeholder "Coming Soon" state.

## 2. Setting Up Data
To publish actual posts, you will need to update `Blog.tsx` by adding a data array for your posts and mapping over it to render cards.

## 3. Recommended Approach for Content
For the content of the posts themselves, we recommend using Markdown. This allows you to write formatted text easily without writing raw HTML. You can use a package like `react-markdown` to render the Markdown content securely in React.
First, install the package:
```bash
npm install react-markdown
```

## 4. Post Object Example
Here is an example of what a post object should look like in your data array:

```typescript
const blogPosts = [
  {
    id: 1,
    title: 'My First Blog Post',
    date: '2026-10-24',
    excerpt: 'This is a short preview of what the post is about.',
    content: '# Hello World\n\nThis is the main content of my first post, written in **Markdown**!'
  }
];
```

## 5. Rendering Markdown
Here is a code example of how to render the markdown content in your React component:

```tsx
import ReactMarkdown from 'react-markdown';

function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {/* Render the markdown content */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
```

## 6. Deployment
After writing a new post or making changes to your blog, you need to deploy the site for the changes to go live.
Run the following command in your terminal:

```bash
npm run deploy
```
