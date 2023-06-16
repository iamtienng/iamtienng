import path from 'path';
import fs from 'fs';
import {sync} from 'glob';
import matter from 'gray-matter';

const POSTS_PATH_CS = path.join(process.cwd(), 'src', 'pages','ComputerScience','contents','posts');
const POSTS_PATH_GC = path.join(process.cwd(), 'src', 'pages','GameCriticism','contents','posts');
const POSTS_PATH_KD = path.join(process.cwd(), 'src', 'pages','KeycapDesigning','contents','posts');

export const getSlugs = (type): string[] => {
    let paths;
    if(type === 'cs'){
        paths = sync(`${POSTS_PATH_CS}/*.mdx`);
    } else if(type === 'gc'){
        paths = sync(`${POSTS_PATH_GC}/*.mdx`);
    } else if(type === 'kd'){
        paths = sync(`${POSTS_PATH_KD}/*.mdx`);
    }
    
    return paths.map((path) => {
        const parts = path.split('/');
        const filename = parts[parts.length - 1];
        const [slug, _ext] = filename.split('.');
        return slug;
    });
};

export const getAllPosts = (type) => {
    const posts = getSlugs(type).map(slug => getPostFromSlug(slug,type)).sort((a, b) => {
        if (a.meta.date > b.meta.date) return -1;
        if (a.meta.date < b.meta.date) return 1;
        return 0;
    });
    return posts;
};

interface Post {
    content: string;
    meta: PostMeta
}

export interface PostMeta {
    excerpt: string;
    slug: string;
    title: string;
    tags: string[];
    date: string;
}

export const getPostFromSlug = (slug: string, type): Post => {
    let postPath;
    if(type === 'cs'){
        postPath = path.join(POSTS_PATH_CS, `${slug}.mdx`);
    } else if(type === 'gc'){
        postPath = path.join(POSTS_PATH_GC, `${slug}.mdx`);
    } else if(type === 'kd'){
        postPath = path.join(POSTS_PATH_KD, `${slug}.mdx`);
    }
    const source = fs.readFileSync(postPath, 'utf8');
    const {content, data} = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt,
            title: data.title ?? 'slug',
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date()).toString(),
        }
    }
};