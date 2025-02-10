// src/app/data/posts.ts
export type Post = {
    id: number;
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    readTime: string;
    author: {
      name: string;
      avatar: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
      };
    };
    categories: string[];
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string;
    };
  };
  
  export const posts: Post[] = [
    {
      id: 1,
      slug: 'nextjs-blog-guide',
      title: 'Building a Modern Blog with Next.js',
      description: 'Complete guide to creating a professional blog using Next.js 14, Tailwind CSS, and TypeScript',
      content: `
        <h2>Introduction</h2>
        <p>Next.js has become one of the most popular frameworks for building modern web applications...</p>
        
        <h2>Setting Up the Project</h2>
        <p>Start by creating a new Next.js project using create-next-app...</p>
        
        <h2>Implementing Features</h2>
        <p>We'll cover dynamic routing, comments section, and responsive design...</p>
      `,
      date: '2024-03-20',
      readTime: '5 min read',
      author: {
        name: 'Ahsan Paracha',
        avatar: {
          src: '/ahsan.jpg',
          alt: 'Ahsan Paracha avatar',
          width: 48,
          height: 48,
          className: 'rounded-full'
        }
      },
      categories: ['Next.js', 'Frontend', 'Tutorial'],
      image: {
        src: '/blog.jpg',
        alt: 'Next.js blog guide cover image',
        width: 1200,
        height: 630,
        className: 'w-full h-64 object-cover'
      }
    },
    {
      id: 2,
      slug: 'responsive-design',
      title: 'Mastering Responsive Web Design',
      description: 'Essential techniques for creating perfect responsive layouts in 2024',
      content: `
        <h2>Responsive Design Fundamentals</h2>
        <p>Responsive design is no longer optional in today's multi-device world...</p>
        
        <h2>CSS Grid and Flexbox</h2>
        <p>Learn how to combine these powerful layout tools...</p>
      `,
      date: '2024-03-22',
      readTime: '8 min read',
      author: {
        name: 'Ahsan Paracha',
        avatar: {
          src: '/ahsan.jpg',
          alt: 'Ahsan Paracha avatar',
          width: 48,
          height: 48,
          className: 'rounded-full'
        }
      },
      categories: ['CSS', 'Responsive Design'],
      image: {
        src: '/image2.png',
        alt: 'Responsive design illustration',
        width: 1280,
        height: 720,
        className: 'w-full h-64 object-cover'
      }
    },

    {
        id: 3,
        slug: 'ai-coding',
        title: ' AI-Powered Code: Revolutionizing Programming Practices',
        description: 'This blog post explores how AI tools are transforming the traditional coding workflow—from automated code generation to intelligent debugging—and what this means for modern software developers.',
        content: `
          <p>In today’s fast-paced tech landscape, artificial intelligence is no longer a futuristic concept—it’s a powerful force reshaping how we write and maintain code. AI-powered tools, such as GitHub Copilot and OpenAI Codex, are already accelerating development by suggesting code snippets, catching errors before they become bugs, and even generating entire functions based on natural language descriptions.

The benefits are clear: developers can focus more on solving complex problems and designing innovative architectures while AI handles repetitive tasks. This not only boosts productivity but also reduces human error. In many cases, AI can serve as an intelligent pair programmer, offering real-time suggestions and alternative approaches that a human might overlook.

Looking forward, the integration of AI into development environments will likely lead to more personalized coding assistants. <br> <br> Imagine an IDE that understands your coding style and preferences, automatically refactors code, and even teaches best practices as you work. As these tools mature, they promise to bridge the gap between rapid prototyping and production-ready code—ushering in a new era of “AI-powered programming.”</p>
          
        `,
        date: '2025-03-14',
        readTime: '7 min read',
        author: {
          name: 'Ahsan Paracha',
          avatar: {
            src: '/ahsan.jpg',
            alt: 'Ahsan Paracha avatar',
            width: 48,
            height: 48,
            className: 'rounded-full'
          }
        },
        categories: ['Programming', 'Ai'],
        image: {
          src: '/ai.jpg',
          alt: 'Responsive design illustration',
          width: 1280,
          height: 720,
          className: 'w-full h-64 object-cover'
        }
      },

      {
        id: 4,
        slug: 'ai-devolopment',
        title: 'Ethics in AI-Driven Development: Balancing Innovation and Responsibility',
        description: 'As AI becomes more integrated into the programming process, ethical considerations are coming to the forefront. This blog post examines the ethical challenges in AI-driven development and offers guidelines for responsible innovation.',
        content: `
          <p>The rapid integration of artificial intelligence into programming workflows has brought about transformative benefits—but it has also raised significant ethical concerns. As AI tools begin to write code, debug software, and optimize processes, questions about accountability, transparency, and bias become increasingly critical. <br> <br>

One of the major ethical challenges in AI-driven development is ensuring that the code generated by these systems does not propagate biases or inadvertently introduce security vulnerabilities. <br> <br> With AI models trained on vast amounts of public code, there is a risk that they might learn and reproduce problematic patterns or even breach copyright laws by outputting code too similar to its training data.

Furthermore, the reliance on AI tools raises questions about the future role of human developers.  <br> <br> While these tools can augment productivity and reduce tedious tasks, it is vital to maintain a human-in-the-loop approach. This ensures that developers remain accountable for the software they produce and that the decisions made by AI systems can be audited and explained.

In this blog post, we explore strategies for responsible AI integration in software development. These include implementing rigorous testing protocols, promoting transparency in AI-generated code, and fostering an environment where ethical considerations are part of the development process from the very start. Balancing innovation with responsibility is not just a technical challenge—it’s a societal imperative as we shape the future of technology.</p>
          
        `,
        date: '2025-02-11',
        readTime: '10 min read',
        author: {
          name: 'Ahsan Paracha',
          avatar: {
            src: '/ahsan.jpg',
            alt: 'Ahsan Paracha avatar',
            width: 48,
            height: 48,
            className: 'rounded-full'
          }
        },
        categories: ['Programming', 'Ai'],
        image: {
          src: '/dev.jpg',
          alt: 'Responsive design illustration',
          width: 1280,
          height: 720,
          className: 'w-full h-64 object-cover'
        }
      },
  ];